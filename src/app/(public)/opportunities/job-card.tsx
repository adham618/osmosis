'use client'

import React, { useState } from 'react'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship'
  level: 'Entry' | 'Mid' | 'Senior'
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
  category: string
  remote: boolean
  posted: string
  deadline: string
  image?: string
  isFeatured?: boolean
}

interface JobCardProps {
  job: Job
  variant?: 'default' | 'horizontal'
  className?: string
  onApply?: (jobId: string) => void
}

export default function JobCard({
  job,
  variant = 'default',
  className = '',
  onApply
}: JobCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const handleApplyClick = () => {
    if (onApply) {
      onApply(job.id)
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-success'
      case 'part-time':
        return 'bg-info'
      case 'contract':
        return 'bg-warning'
      case 'internship':
        return 'bg-primary'
      default:
        return 'bg-secondary'
    }
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'entry':
        return 'bg-light text-dark'
      case 'mid':
        return 'bg-primary'
      case 'senior':
        return 'bg-danger'
      default:
        return 'bg-secondary'
    }
  }

  if (variant === 'horizontal') {
    return (
      <div className={`single-job horizontal-job ${className}`}>
        <div className="row">
          <div className="col-xl-8 col-md-8 col-sm-12">
            <div className="job-content">
              <div className="job-header d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h3 className="job-title mb-2">{job.title}</h3>
                  <div className="job-meta d-flex flex-wrap gap-2 mb-2">
                    <span className="company-name">
                      <i className="bx bx-buildings"></i> {job.company}
                    </span>
                    <span className="location">
                      <i className="bx bx-map"></i> {job.location}
                    </span>
                    {job.remote && (
                      <span className="remote-badge">
                        <i className="bx bx-wifi"></i> Remote
                      </span>
                    )}
                  </div>
                  <div className="job-badges d-flex flex-wrap gap-2">
                    <span className={`badge ${getTypeColor(job.type)}`}>{job.type}</span>
                    <span className={`badge ${getLevelColor(job.level)}`}>{job.level}</span>
                    <span className="badge bg-secondary">{job.category}</span>
                  </div>
                </div>
                <div className="salary-info text-end">
                  <div className="salary">{job.salary}</div>
                  <small className="text-muted">Posted: {job.posted}</small>
                </div>
              </div>

              <div className="job-description">
                <p className="mb-2">{job.description}</p>

                {showDetails && (
                  <div className="job-details mt-3">
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Requirements:</h6>
                        <ul className="requirements-list">
                          {job.requirements.map((req, index) => (
                            <li key={index}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Benefits:</h6>
                        <ul className="benefits-list">
                          {job.benefits.map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="deadline-info mt-3">
                      <small className="text-danger">
                        <i className="bx bx-time-five"></i> Application Deadline: {job.deadline}
                      </small>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-4 col-sm-12">
            <div className="job-actions d-flex flex-column gap-2">
              <button className="btn btn-primary btn-apply" onClick={handleApplyClick}>
                <i className="bx bx-paper-plane"></i> Apply Now
              </button>
              <button
                className="btn btn-outline-secondary btn-details"
                onClick={() => setShowDetails(!showDetails)}
              >
                <i className="bx bx-info-circle"></i> {showDetails ? 'Hide' : 'View'} Details
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`single-job card ${className}`}>
      <div className="card-body d-flex flex-column" style={{ height: '100%' }}>
        <div className="job-header mb-3">
          <div className="d-flex justify-content-between align-items-start">
            <div>
              <h5 className="job-title card-title">{job.title}</h5>
              <div className="job-meta mb-2">
                <div className="company-name mb-1">
                  <i className="bx bx-buildings"></i> {job.company}
                </div>
                <div className="location">
                  <i className="bx bx-map"></i> {job.location}
                  {job.remote && (
                    <span className="ms-2">
                      <i className="bx bx-wifi"></i> Remote
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="salary-info text-end">
              <div className="salary fw-bold">{job.salary}</div>
            </div>
          </div>

          <div className="job-badges d-flex flex-wrap gap-2 mt-2">
            <span className={`badge ${getTypeColor(job.type)}`}>{job.type}</span>
            <span className={`badge ${getLevelColor(job.level)}`}>{job.level}</span>
            <span className="badge bg-secondary">{job.category}</span>
          </div>
        </div>

        <div className="job-description">
          <p className="card-text">{job.description.substring(0, 120)}...</p>
        </div>

        <div className="job-footer d-flex justify-content-between align-items-center mt-auto">
          <small className="text-muted">
            <i className="bx bx-time-five"></i> Posted: {job.posted}
          </small>
          <div className="job-actions">
            <button className="btn btn-primary btn-sm" onClick={handleApplyClick}>
              <i className="bx bx-paper-plane"></i> Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
