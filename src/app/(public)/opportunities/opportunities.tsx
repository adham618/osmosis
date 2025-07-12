'use client'

import React, { useState } from 'react'

import JobCard, { type Job } from './job-card'
import ApplicationForm, { type ApplicationData } from './application-form'
import { jobs } from './data'

export default function Opportunities() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [filterType, setFilterType] = useState<string>('all')
  const [filterLevel, setFilterLevel] = useState<string>('all')
  const [filterLocation, setFilterLocation] = useState<string>('all')

  const allJobs = jobs

  const handleApplyClick = (jobId: string) => {
    const job = allJobs.find((j) => j.id === jobId)

    if (job) {
      setSelectedJob(job)
      setShowApplicationForm(true)
    }
  }

  const handleApplicationSubmit = (application: ApplicationData) => {
    console.log('Application submitted:', application)
  }

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false)
    setSelectedJob(null)
  }

  const filteredJobs = allJobs.filter((job) => {
    const matchesType = filterType === 'all' || job.type.toLowerCase() === filterType.toLowerCase()
    const matchesLevel =
      filterLevel === 'all' || job.level.toLowerCase() === filterLevel.toLowerCase()
    const matchesLocation =
      filterLocation === 'all' ||
      (filterLocation === 'remote' && job.remote) ||
      (filterLocation === 'onsite' && !job.remote)

    return matchesType && matchesLevel && matchesLocation
  })

  const filteredFeaturedJobs = filteredJobs.filter((job) => job.isFeatured)
  const filteredOtherJobs = filteredJobs

  return (
    <>
      <section className="job-stats" style={{ marginTop: '5%', marginBottom: '2%' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h2>Join Our Growing Team</h2>
              <p className="lead">
                Discover exciting opportunities to make a difference in education
              </p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-6 col-6">
              <div className="stat-card">
                <div className="stat-number">{allJobs.length}</div>
                <div className="stat-label">Open Positions</div>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="stat-card">
                <div className="stat-number">{allJobs.filter((j) => j.remote).length}</div>
                <div className="stat-label">Remote Jobs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="job-filters mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="filter-container p-4 bg-light rounded">
                <h5 className="mb-3">Filter Opportunities</h5>
                <div className="row">
                  <div className="col-md-4">
                    <label htmlFor="typeFilter" className="form-label">
                      Job Type
                    </label>
                    <select
                      id="typeFilter"
                      className="form-select"
                      value={filterType}
                      onChange={(e) => setFilterType(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="internship">Internship</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="levelFilter" className="form-label">
                      Experience Level
                    </label>
                    <select
                      id="levelFilter"
                      className="form-select"
                      value={filterLevel}
                      onChange={(e) => setFilterLevel(e.target.value)}
                    >
                      <option value="all">All Levels</option>
                      <option value="entry">Entry Level</option>
                      <option value="mid">Mid Level</option>
                      <option value="senior">Senior Level</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="locationFilter" className="form-label">
                      Work Location
                    </label>
                    <select
                      id="locationFilter"
                      className="form-select"
                      value={filterLocation}
                      onChange={(e) => setFilterLocation(e.target.value)}
                    >
                      <option value="all">All Locations</option>
                      <option value="remote">Remote</option>
                      <option value="onsite">On-site</option>
                    </select>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12">
                    <small className="text-muted">
                      Showing {filteredJobs.length} of {allJobs.length} opportunities
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {filteredFeaturedJobs.length > 0 && (
        <section className="featured-jobs" style={{ marginBottom: '4%' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-8 col-md-8" data-aos="fade-up">
                <div className="section-title">
                  <span>Featured</span>
                  <h2>Top Opportunities</h2>
                </div>
              </div>

              <div
                className="col-xl-4 col-md-4 align-self-center text-end title_btn"
                data-aos="fade-in"
              >
                <span className="badge btn-primary">{filteredFeaturedJobs.length} Featured</span>
              </div>

              {filteredFeaturedJobs.map((job) => (
                <div key={job.id} className="col-12 mb-4" data-aos="fade-in">
                  <JobCard job={job} variant="horizontal" onApply={handleApplyClick} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="all-jobs section-padding pt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>All Opportunities</h2>
              <p className="mb-4">Explore all available positions across our partner companies</p>
            </div>

            {filteredOtherJobs.length > 0 ? (
              filteredOtherJobs.map((job) => (
                <div key={job.id} className="col-xl-4 col-md-6 col-12 mb-4" data-aos="fade-in">
                  <JobCard job={job} onApply={handleApplyClick} />
                </div>
              ))
            ) : (
              <div className="col-12">
                <div className="text-center py-5">
                  <i className="bx bx-search-alt-2 display-1 text-muted mb-3"></i>
                  <h4>No opportunities found</h4>
                  <p className="text-muted">Try adjusting your filters to see more results</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {showApplicationForm && selectedJob && (
        <ApplicationForm
          job={selectedJob}
          onClose={handleCloseApplicationForm}
          onSubmit={handleApplicationSubmit}
        />
      )}

      <style>{`
        .stat-card {
          padding: 20px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--purple-main);
          margin-bottom: 5px;
        }

        .btn-primary {
          background-color: var(--purple-main);
          border-color: var(--purple-main);
        }
        .btn-primary:disabled{
          background-color: var(--purple-main);
          border-color: var(--purple-main);
        }
        .btn-primary:hover {
          background-color: var(--purple-main);
          opacity: 0.9;
          border-color: var(--purple-main);
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .filter-container {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .single-job {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          margin-bottom: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
        }

        .single-job:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .horizontal-job {
          border-left: 4px solid var(--purple-main);
        }

        .job-title {
          color: #333;
          margin-bottom: 10px;
        }

        .job-title:hover {
          color: var(--purple-main);
        }

        .job-meta {
          color: #666;
          font-size: 0.9rem;
        }

        .job-meta i {
          margin-right: 5px;
        }

        .company-name, .location {
          margin-right: 15px;
        }

        .remote-badge {
          color: #28a745;
          font-weight: 500;
        }
        .job-description{
          line-height: 1.6;
          }

        .salary {
          font-size: 1rem;
          font-weight: 600;
          color: #28a745;
          line-height: 1.5;
        }

        .job-actions .btn {
          margin-right: 10px;
        }

        .btn-apply {
          background: var(--purple-main);
          border: none;
          transition: all 0.3s ease;
        }

        .btn-apply:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px var(--purple-main);
        }

        .requirements-list, .benefits-list {
          padding-left: 20px;
        }

        .requirements-list li, .benefits-list li {
          margin-bottom: 5px;
        }

        .job-details {
          border-top: 1px solid #e9ecef;
          padding-top: 15px;
        }

        .section-title span {
          color: var(--purple-main);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title h2 {
          margin-top: 10px;
          color: #333;
        }

        @media (max-width: 768px) {
          .stat-number {
            font-size: 2rem;
          }
          .section-title{
              margin-bottom: 20px;
            }
          .job-actions {
            margin-top: 15px;
          }

          .job-actions .btn {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      `}</style>
    </>
  )
}
