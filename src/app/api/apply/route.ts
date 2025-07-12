import { NextRequest, NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import { Resend } from 'resend'
import { ApplicationEmail } from '@@/emails/application-email'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const applicationData = {
      jobId: formData.get('jobId') as string,
      jobTitle: formData.get('jobTitle') as string,
      firstName: formData.get('firstName') as string,
      lastName: formData.get('lastName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      linkedinUrl: formData.get('linkedinUrl') as string,
      githubUrl: formData.get('githubUrl') as string,
      portfolioUrl: formData.get('portfolioUrl') as string,
      coverLetter: formData.get('coverLetter') as string,
      experience: formData.get('experience') as string,
      expectedSalary: formData.get('expectedSalary') as string,
      availabilityDate: formData.get('availabilityDate') as string
    }

    const cvFile = formData.get('cv') as File
    const additionalFiles = formData.getAll('additionalDocuments') as File[]

    let cvUrl = ''
    let additionalDocumentUrls: string[] = []

    // Upload CV
    if (cvFile) {
      const cvBuffer = await cvFile.arrayBuffer()
      const cvBase64 = Buffer.from(cvBuffer).toString('base64')
      const cvDataUri = `data:${cvFile.type};base64,${cvBase64}`
      const sanitizedName = cvFile.name.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9-_]/g, '_')
      const extension = cvFile.name.split('.').pop()

      const cvResult = await cloudinary.uploader.upload(cvDataUri, {
        folder: 'applications/cvs',
        resource_type: 'auto',
        use_filename: true,
        unique_filename: false,
        filename_override: `${sanitizedName}-${Date.now()}.${extension}`,
        flags: 'attachment'
      })

      cvUrl = cvResult.secure_url
    }

    if (additionalFiles.length > 0) {
      for (const file of additionalFiles) {
        const fileBuffer = await file.arrayBuffer()
        const fileBase64 = Buffer.from(fileBuffer).toString('base64')
        const fileDataUri = `data:${file.type};base64,${fileBase64}`

        const sanitizedName = file.name.replace(/\.[^/.]+$/, '').replace(/[^a-zA-Z0-9-_]/g, '_')
        const extension = file.name.split('.').pop()

        const fileResult = await cloudinary.uploader.upload(fileDataUri, {
          folder: 'applications/documents',
          resource_type: 'auto',
          use_filename: true,
          unique_filename: false,
          filename_override: `${sanitizedName}-${Date.now()}.${extension}`,
          flags: 'attachment'
        })

        additionalDocumentUrls.push(fileResult.secure_url)
      }
    }

    const emailData = {
      ...applicationData,
      cvUrl,
      additionalDocumentUrls,
      submittedAt: new Date().toISOString()
    }

    const fromEmail = process.env.RESEND_FROM
    const toEmail = process.env.RESEND_TO

    if (!fromEmail || !toEmail) {
      throw new Error('RESEND_FROM or RESEND_TO environment variables are not set')
    }

    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Application: ${applicationData.jobTitle} - ${applicationData.firstName} ${applicationData.lastName}`,
      react: ApplicationEmail(emailData)
    })

    if (adminEmailResult.error) {
      throw new Error(`Admin email failed: ${adminEmailResult.error.message}`)
    }

    const confirmationEmailResult = await resend.emails.send({
      from: fromEmail,
      to: applicationData.email,
      subject: `Application Received: ${applicationData.jobTitle}`,
      react: ApplicationEmail({ ...emailData, isConfirmation: true })
    })

    if (confirmationEmailResult.error) {
      throw new Error(`Confirmation email failed: ${confirmationEmailResult.error.message}`)
    }

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      cvUrl,
      additionalDocumentUrls
    })
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit application',
        details: error.message || 'Unknown error'
      },
      { status: 500 }
    )
  }
}
