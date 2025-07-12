import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text
} from '@react-email/components'

import { siteConfig } from '@/config/site'

interface ApplicationEmailProps {
  jobId: string
  jobTitle: string
  firstName: string
  lastName: string
  email: string
  phone: string
  linkedinUrl?: string
  githubUrl?: string
  portfolioUrl?: string
  coverLetter: string
  experience: string
  expectedSalary?: string
  availabilityDate?: string
  cvUrl: string
  additionalDocumentUrls: string[]
  submittedAt: string
  isConfirmation?: boolean
}

export const ApplicationEmail = ({
  jobId,
  jobTitle,
  firstName,
  lastName,
  email,
  phone,
  linkedinUrl,
  githubUrl,
  portfolioUrl,
  coverLetter,
  experience,
  expectedSalary,
  availabilityDate,
  cvUrl,
  additionalDocumentUrls,
  submittedAt,
  isConfirmation = false
}: ApplicationEmailProps) => {
  const fullName = `${firstName} ${lastName}`

  if (isConfirmation) {
    return (
      <Html>
        <Head />
        <Preview>
          Your application for {jobTitle} has been received - {siteConfig.name}
        </Preview>
        <Body style={main}>
          <Container style={container}>
            <Section style={header}>
              <Img
                src={`${siteConfig.url}/assets/img/logo-purp.png`}
                alt={`${siteConfig.name} Logo`}
                width="120"
                height="40"
                style={logo}
              />
            </Section>

            <Section style={content}>
              <Heading style={h1}>Application Confirmation</Heading>

              <Text style={greeting}>Dear {firstName},</Text>

              <Text style={text}>
                Thank you for your interest in the <strong>{jobTitle}</strong> position at{' '}
                {siteConfig.name}. We have successfully received your application submitted on{' '}
                {new Date(submittedAt).toLocaleDateString()}.
              </Text>

              <Text style={text}>
                Our hiring team will carefully review your application and supporting documents. We
                will contact you within the next 5-7 business days to update you on the status of
                your application and discuss next steps.
              </Text>

              <Text style={text}>
                In the meantime, feel free to explore more about our company culture and values on
                our website. If you have any questions about this position or the application
                process, please don&apos;t hesitate to reach out.
              </Text>

              <Text style={signature}>
                Best regards,
                <br />
                <strong>The {siteConfig.name} Hiring Team</strong>
              </Text>
            </Section>

            <Section style={footer}>
              <Hr style={hr} />
              <Text style={footerText}>
                This is an automated confirmation email. Please do not reply to this message.
                <br />
                {siteConfig.name} | {siteConfig.url}
              </Text>
            </Section>
          </Container>
        </Body>
      </Html>
    )
  }

  return (
    <Html>
      <Head />
      <Preview>
        New Application: {fullName} for {jobTitle} - {siteConfig.name}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src={`${siteConfig.url}/assets/img/logo-purp.png`}
              alt={`${siteConfig.name} Logo`}
              width="120"
              height="40"
              style={logo}
            />
          </Section>

          <Section style={content}>
            <Heading style={h1}>New Job Application Received</Heading>

            <Section style={infoSection}>
              <Heading style={h2}>Position Details</Heading>
              <Text style={text}>
                <strong>Job Title:</strong> {jobTitle}
                <br />
                <strong>Application Submitted:</strong> {new Date(submittedAt).toLocaleString()}
                <br />
                <strong>Application ID:</strong> #{jobId}
              </Text>
            </Section>

            <Hr style={hr} />

            <Section style={infoSection}>
              <Heading style={h2}>Candidate Profile</Heading>
              <Text style={text}>
                <strong>Full Name:</strong> {fullName}
                <br />
                <strong>Email Address:</strong> {email}
                <br />
                <strong>Phone Number:</strong> {phone}
              </Text>

              {(linkedinUrl || githubUrl || portfolioUrl) && (
                <Text style={text}>
                  <strong>Professional Profiles:</strong>
                  <br />
                  {linkedinUrl && (
                    <>
                      • LinkedIn:{' '}
                      <Link href={linkedinUrl} style={link}>
                        {linkedinUrl}
                      </Link>
                      <br />
                    </>
                  )}
                  {githubUrl && (
                    <>
                      • GitHub:{' '}
                      <Link href={githubUrl} style={link}>
                        {githubUrl}
                      </Link>
                      <br />
                    </>
                  )}
                  {portfolioUrl && (
                    <>
                      • Portfolio:{' '}
                      <Link href={portfolioUrl} style={link}>
                        {portfolioUrl}
                      </Link>
                      <br />
                    </>
                  )}
                </Text>
              )}

              {(expectedSalary || availabilityDate) && (
                <Text style={text}>
                  <strong>Additional Information:</strong>
                  <br />
                  {expectedSalary && (
                    <>
                      • Expected Salary: {expectedSalary}
                      <br />
                    </>
                  )}
                  {availabilityDate && (
                    <>
                      • Available From: {availabilityDate}
                      <br />
                    </>
                  )}
                </Text>
              )}
            </Section>

            <Hr style={hr} />

            <Section style={infoSection}>
              <Heading style={h2}>Cover Letter</Heading>
              <Text style={messageText}>{coverLetter}</Text>
            </Section>

            <Hr style={hr} />

            <Section style={infoSection}>
              <Heading style={h2}>Professional Experience</Heading>
              <Text style={messageText}>{experience}</Text>
            </Section>

            <Hr style={hr} />

            <Section style={infoSection}>
              <Heading style={h2}>Submitted Documents</Heading>
              <Text style={text}>
                <strong>Resume/CV:</strong>
                <br />
                <Link href={cvUrl} style={downloadLink}>
                  📄 Download Resume/CV
                </Link>
              </Text>

              {additionalDocumentUrls.length > 0 && (
                <Text style={text}>
                  <strong>Additional Documents:</strong>
                  <br />
                  {additionalDocumentUrls.map((url, index) => (
                    <span key={index}>
                      <Link href={url} style={downloadLink}>
                        📎 Additional Document {index + 1}
                      </Link>
                      <br />
                    </span>
                  ))}
                </Text>
              )}
            </Section>
          </Section>

          <Section style={footer}>
            <Hr style={hr} />
            <Text style={footerText}>
              This application was submitted through {siteConfig.name} careers portal.
              <br />
              {siteConfig.name} | {siteConfig.url}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Enhanced Styles
const main = {
  backgroundColor: '#f8fafc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  padding: '20px 0'
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  maxWidth: '600px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden'
}

const header = {
  backgroundColor: '#ffffff',
  padding: '32px 48px 24px',
  borderBottom: '1px solid #e2e8f0',
  textAlign: 'center' as const
}

const logo = {
  margin: '0 auto'
}

const content = {
  padding: '32px 48px'
}

const infoSection = {
  marginBottom: '24px'
}

const h1 = {
  color: '#1a202c',
  fontSize: '28px',
  fontWeight: '700',
  margin: '0 0 32px 0',
  textAlign: 'center' as const
}

const h2 = {
  color: '#2d3748',
  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 16px 0',
  borderBottom: '2px solid #e2e8f0',
  paddingBottom: '8px'
}

const text = {
  color: '#4a5568',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0'
}

const messageText = {
  color: '#4a5568',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 16px 0',
  padding: '20px',
  backgroundColor: '#f7fafc',
  borderRadius: '6px',
  borderLeft: '4px solid #4299e1'
}

const greeting = {
  color: '#2d3748',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '0 0 24px 0'
}

const signature = {
  color: '#2d3748',
  fontSize: '16px',
  lineHeight: '1.6',
  margin: '32px 0 0 0'
}

const link = {
  color: '#4299e1',
  textDecoration: 'underline',
  fontWeight: '500'
}

const downloadLink = {
  color: '#4299e1',
  textDecoration: 'underline',
  fontWeight: '500',
  display: 'inline-block',
  marginBottom: '8px'
}

const hr = {
  borderColor: '#e2e8f0',
  margin: '32px 0'
}

const footer = {
  backgroundColor: '#f7fafc',
  padding: '24px 48px',
  borderTop: '1px solid #e2e8f0'
}

const footerText = {
  color: '#718096',
  fontSize: '14px',
  lineHeight: '1.5',
  textAlign: 'center' as const,
  margin: '0'
}

export default ApplicationEmail
