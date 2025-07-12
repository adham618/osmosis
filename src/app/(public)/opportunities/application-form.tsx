'use client'

import React, { useState } from 'react'

import { Job } from './job-card'

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
  cv: File | null
  additionalDocuments: File[]
}

export default function ApplicationForm({ job, onClose, onSubmit }: ApplicationFormProps) {
  const [formData, setFormData] = useState<ApplicationData>({
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
    additionalDocuments: []
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target

    if (name === 'cv' && files && files[0]) {
      setFormData((prev) => ({
        ...prev,
        cv: files[0]
      }))
    } else if (name === 'additionalDocuments' && files) {
      setFormData((prev) => ({
        ...prev,
        additionalDocuments: Array.from(files)
      }))
    }
  }

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format'
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required'
    if (!formData.coverLetter.trim()) newErrors.coverLetter = 'Cover letter is required'
    if (!formData.experience.trim()) newErrors.experience = 'Experience information is required'
    if (!formData.cv) newErrors.cv = 'CV/Resume is required'

    // URL validations (optional fields)
    if (formData.linkedinUrl && !formData.linkedinUrl.includes('linkedin.com')) {
      newErrors.linkedinUrl = 'Please enter a valid LinkedIn URL'
    }
    if (formData.githubUrl && !formData.githubUrl.includes('github.com')) {
      newErrors.githubUrl = 'Please enter a valid GitHub URL'
    }

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onSubmit(formData)
      alert('Application submitted successfully!')
      onClose()
    } catch (error) {
      alert(`Error submitting application. Please try again., ${error}`)
    } finally {
      setIsSubmitting(false)
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

          <form onSubmit={handleSubmit}>
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
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
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
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
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
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
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
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
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
                      name="linkedinUrl"
                      value={formData.linkedinUrl}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                    {errors.linkedinUrl && (
                      <div className="invalid-feedback">{errors.linkedinUrl}</div>
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
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleInputChange}
                      placeholder="https://github.com/yourusername"
                    />
                    {errors.githubUrl && <div className="invalid-feedback">{errors.githubUrl}</div>}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="portfolioUrl" className="form-label">
                  Portfolio/Personal Website
                </label>
                <input
                  type="url"
                  className="form-control"
                  id="portfolioUrl"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="https://yourportfolio.com"
                />
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
                  name="coverLetter"
                  rows={4}
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  placeholder="Tell us why you're interested in this position..."
                />
                {errors.coverLetter && <div className="invalid-feedback">{errors.coverLetter}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="experience" className="form-label">
                  Relevant Experience *
                </label>
                <textarea
                  className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
                  id="experience"
                  name="experience"
                  rows={3}
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Describe your relevant experience and skills..."
                />
                {errors.experience && <div className="invalid-feedback">{errors.experience}</div>}
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
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      placeholder="e.g., $60,000 - $80,000"
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
                      name="availabilityDate"
                      value={formData.availabilityDate}
                      onChange={handleInputChange}
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
                <input
                  type="file"
                  className={`form-control ${errors.cv ? 'is-invalid' : ''}`}
                  id="cv"
                  name="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                />
                {errors.cv && <div className="invalid-feedback">{errors.cv}</div>}
                <div className="form-text">Accepted formats: PDF, DOC, DOCX (Max 5MB)</div>
              </div>

              <div className="mb-3">
                <label htmlFor="additionalDocuments" className="form-label">
                  Additional Documents
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="additionalDocuments"
                  name="additionalDocuments"
                  multiple
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileChange}
                />
                <div className="form-text">Optional: Portfolio, certificates, references, etc.</div>
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
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
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
      `}</style>
    </div>
  )
}
