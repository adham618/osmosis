// Updated ApplicationForm.tsx
'use client'
import type { Job } from './job-card'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface ApplicationFormProps {
  job: Job
  onClose: () => void
  onSubmit: (application: ApplicationData) => void
}

export interface ApplicationData {
  jobId: string
  jobTitle: string
  firstName: string
  lastName: string
  email: string
  phone: string
  linkedinUrl: string
  githubUrl: string
  portfolioUrl: string
  coverLetter: string
  experience: string
  expectedSalary: string
  availabilityDate: string
  cv: FileList | null
  additionalDocuments: FileList | null
}

export default function ApplicationForm({ job, onClose, onSubmit }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [additionalFiles, setAdditionalFiles] = useState<File[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<ApplicationData>({
    defaultValues: {
      jobId: job.id,
      jobTitle: job.title,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      linkedinUrl: '',
      githubUrl: '',
      portfolioUrl: '',
      coverLetter: '',
      experience: '',
      expectedSalary: '',
      availabilityDate: '',
      cv: null,
      additionalDocuments: null
    }
  })

  const cvFiles = watch('cv')

  const onSubmitHandler = async (data: ApplicationData) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()

      Object.entries(data).forEach(([key, value]) => {
        if (key === 'cv' && value?.[0]) {
          formData.append('cv', value[0])
        } else if (key === 'additionalDocuments') {
          additionalFiles.forEach((file) => {
            formData.append('additionalDocuments', file)
          })
        } else if (value && typeof value === 'string') {
          formData.append(key, value)
        }
      })

      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()

      if (result.success) {
        onSubmit(data)
        toast.success('Application submitted successfully!')
        onClose()
      } else {
        throw new Error(result.error || 'Failed to submit application')
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Error submitting application')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleAdditionalFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)

      setAdditionalFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  return (
    <div className="application-form-overlay">
      <div className="application-form-container">
        <div className="application-form">
          <div className="form-header d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3>Apply for Position</h3>
              <p className="text-muted mb-0">
                {job.title} at {job.company}
              </p>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="section mb-4">
              <h5 className="section-title mb-3">Personal Information</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                      id="firstName"
                      {...register('firstName', {
                        required: 'First name is required',
                        minLength: {
                          value: 2,
                          message: 'First name must be at least 2 characters'
                        }
                      })}
                    />
                    {errors.firstName && (
                      <div className="invalid-feedback">{errors.firstName.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                      id="lastName"
                      {...register('lastName', {
                        required: 'Last name is required',
                        minLength: {
                          value: 2,
                          message: 'Last name must be at least 2 characters'
                        }
                      })}
                    />
                    {errors.lastName && (
                      <div className="invalid-feedback">{errors.lastName.message}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      id="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Invalid email format'
                        }
                      })}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[\+]?[0-9\s\-\(\)]{10,}$/,
                          message: 'Invalid phone number format'
                        }
                      })}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
                  </div>
                </div>
              </div>
            </div>
            <div className="section mb-4">
              <h5 className="section-title mb-3">Professional Links</h5>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="linkedinUrl" className="form-label">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      className={`form-control ${errors.linkedinUrl ? 'is-invalid' : ''}`}
                      id="linkedinUrl"
                      placeholder="https://linkedin.com/in/yourprofile"
                      {...register('linkedinUrl', {
                        pattern: {
                          value: /^https?:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/,
                          message: 'Please enter a valid LinkedIn URL'
                        }
                      })}
                    />
                    {errors.linkedinUrl && (
                      <div className="invalid-feedback">{errors.linkedinUrl.message}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="githubUrl" className="form-label">
                      GitHub Profile
                    </label>
                    <input
                      type="url"
                      className={`form-control ${errors.githubUrl ? 'is-invalid' : ''}`}
                      id="githubUrl"
                      placeholder="https://github.com/yourusername"
                      {...register('githubUrl', {
                        pattern: {
                          value: /^https?:\/\/(www\.)?github\.com\/[\w-]+\/?$/,
                          message: 'Please enter a valid GitHub URL'
                        }
                      })}
                    />
                    {errors.githubUrl && (
                      <div className="invalid-feedback">{errors.githubUrl.message}</div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="portfolioUrl" className="form-label">
                  Portfolio/Personal Website
                </label>
                <input
                  type="url"
                  className={`form-control ${errors.portfolioUrl ? 'is-invalid' : ''}`}
                  id="portfolioUrl"
                  placeholder="https://yourportfolio.com"
                  {...register('portfolioUrl', {
                    pattern: {
                      value: /^https?:\/\/.+\..+/,
                      message: 'Please enter a valid URL'
                    }
                  })}
                />
                {errors.portfolioUrl && (
                  <div className="invalid-feedback">{errors.portfolioUrl.message}</div>
                )}
              </div>
            </div>
            <div className="section mb-4">
              <h5 className="section-title mb-3">Application Details</h5>
              <div className="mb-3">
                <label htmlFor="coverLetter" className="form-label">
                  Cover Letter *
                </label>
                <textarea
                  className={`form-control ${errors.coverLetter ? 'is-invalid' : ''}`}
                  id="coverLetter"
                  rows={4}
                  placeholder="Tell us why you're interested in this position..."
                  {...register('coverLetter', {
                    required: 'Cover letter is required',
                    minLength: {
                      value: 50,
                      message: 'Cover letter must be at least 50 characters'
                    }
                  })}
                />
                {errors.coverLetter && (
                  <div className="invalid-feedback">{errors.coverLetter.message}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="experience" className="form-label">
                  Relevant Experience *
                </label>
                <textarea
                  className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                  id="experience"
                  rows={3}
                  placeholder="Describe your relevant experience and skills..."
                  {...register('experience', {
                    required: 'Experience information is required',
                    minLength: {
                      value: 30,
                      message: 'Experience description must be at least 30 characters'
                    }
                  })}
                />
                {errors.experience && (
                  <div className="invalid-feedback">{errors.experience.message}</div>
                )}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="expectedSalary" className="form-label">
                      Expected Salary
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expectedSalary"
                      placeholder={job.salary}
                      {...register('expectedSalary')}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label htmlFor="availabilityDate" className="form-label">
                      Availability Date
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="availabilityDate"
                      min={new Date().toISOString().split('T')[0]}
                      {...register('availabilityDate')}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="section mb-4">
              <h5 className="section-title mb-3">Documents</h5>
              <div className="mb-3">
                <label htmlFor="cv" className="form-label">
                  CV/Resume *
                </label>
                <div className={`simple-file-upload ${errors.cv ? 'error' : ''}`}>
                  <input
                    type="file"
                    id="cv"
                    accept=".pdf,.doc,.docx"
                    className="file-input"
                    {...register('cv', {
                      required: 'CV/Resume is required',
                      validate: {
                        fileSize: (files) => {
                          if (!files || files.length === 0) return true
                          const file = files[0]

                          return file.size <= 5 * 1024 * 1024 || 'File size must be less than 5MB'
                        },
                        fileType: (files) => {
                          if (!files || files.length === 0) return true
                          const file = files[0]
                          const allowedTypes = [
                            'application/pdf',
                            'application/msword',
                            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
                          ]

                          return (
                            allowedTypes.includes(file.type) ||
                            'Only PDF, DOC, and DOCX files are allowed'
                          )
                        }
                      }
                    })}
                  />
                  <label htmlFor="cv" className="file-upload-label">
                    <span className="file-name">
                      {cvFiles && cvFiles.length > 0 ? cvFiles[0].name : 'Choose file'}
                    </span>
                    <span className="upload-btn">Browse</span>
                  </label>
                </div>
                {errors.cv && <div className="file-error">{errors.cv.message}</div>}
                <small className="text-muted">PDF, DOC, DOCX (Max 5MB)</small>
              </div>
              <div className="mb-3">
                <label htmlFor="additionalDocuments" className="form-label">
                  Additional Documents
                </label>
                <div className="simple-file-upload">
                  <input
                    type="file"
                    id="additionalDocuments"
                    multiple
                    accept=".pdf,.doc,.docx,.txt"
                    className="file-input"
                    onChange={handleAdditionalFilesChange}
                  />
                  <label htmlFor="additionalDocuments" className="file-upload-label">
                    <span className="file-name">
                      {additionalFiles.length > 0
                        ? `${additionalFiles.length} file${additionalFiles.length > 1 ? 's' : ''} selected`
                        : 'Choose files'}
                    </span>
                    <span className="upload-btn">Browse</span>
                  </label>
                </div>
                {additionalFiles.length > 0 && (
                  <div className="selected-files">
                    {additionalFiles.map((file, index) => (
                      <div key={index} className="file-item">
                        <span>{file.name}</span>
                        <button
                          type="button"
                          className="remove-file"
                          onClick={() => {
                            setAdditionalFiles((prev) => prev.filter((_, i) => i !== index))
                          }}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                <small className="text-muted">Portfolio, certificates, references (Optional)</small>
              </div>
            </div>
            <div className="form-footer d-flex justify-content-end gap-2">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                style={{
                  minWidth: '160px'
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="spinner-border spinner-border-sm me-2"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`
        .application-form-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1050;
          padding: 20px;
        }
        .application-form-container {
          background: white;
          border-radius: 8px;
          width: 100%;
          max-width: 800px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .application-form {
          padding: 30px;
        }
        .section-title {
          color: #333;
          border-bottom: 2px solid #e9ecef;
          padding-bottom: 8px;
        }
        .form-control {
          margin-bottom: 8px;
        }
        .simple-file-upload {
          position: relative;
          margin-bottom: 8px;
        }
        .simple-file-upload.error .file-upload-label {
          border-color: #dc3545;
        }
        .file-input {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        .file-upload-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          border: 1px solid #ced4da;
          border-radius: 4px;
          background-color: #fff;
          cursor: pointer;
          transition: border-color 0.15s ease-in-out;
        }
        .file-upload-label:hover {
          border-color: var(--purple-main);
        }
        .file-name {
          flex: 1;
          color: #495057;
          font-size: 0.875rem;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        .upload-btn {
          padding: 6px 12px;
          background-color: #f8f9fa;
          color: #495057;
          border: 1px solid #ced4da;
          border-radius: 4px;
          font-size: 0.875rem;
          font-weight: 500;
          margin-left: 12px;
          flex-shrink: 0;
        }
        .file-upload-label:hover .upload-btn {
          background-color: #e9ecef;
        }
        .file-error {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 4px;
        }
        .selected-files {
          margin-top: 8px;
          padding: 8px;
          border: 1px solid #e9ecef;
          border-radius: 4px;
          background-color: #f8f9fa;
        }
        .file-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 4px 8px;
          margin-bottom: 4px;
          background-color: white;
          border-radius: 4px;
          font-size: 0.875rem;
        }
        .file-item:last-child {
          margin-bottom: 0;
        }
        .remove-file {
          background: none;
          border: none;
          color: #dc3545;
          cursor: pointer;
          font-size: 1.2rem;
          padding: 0;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .remove-file:hover {
          background-color: #dc3545;
          color: white;
          border-radius: 50%;
        }
      `}</style>
    </div>
  )
}
