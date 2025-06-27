import React from 'react'
import Image from 'next/image'

export interface Course {
  id: string
  title: string
  image: string
  category: string
  level: string
  rating: number
  students: string
  lessons: number
  duration?: string
  tags: string
  link?: string
}

interface CourseCardProps {
  course: Course
  variant?: 'default' | 'horizontal'
  className?: string
}

export default function CourseCard({
  course,
  variant = 'default',
  className = ''
}: CourseCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <i key={index} className={`bx ${index < rating ? 'bxs-star' : 'bx-star'}`} />
    ))
  }

  if (variant === 'horizontal') {
    return (
      <div className={`single-course cstyle-2 ${className}`}>
        <div className="row">
          <div className="col-xl-6 col-md-6 col-sm-6 col-12">
            <div className="course-img">
              <div className="c_image" style={{ backgroundImage: `url(${course.image})` }} />
              <div className="ccategory">
                <a href="#">{course.level}</a>
              </div>
            </div>
          </div>

          <div className="col-xl-6 col-md-6 col-sm-6 col-12">
            <div className="course_content">
              <div className="crating">
                <a href="#">{renderStars(course.rating)}</a>
              </div>
              <h2>
                <a href={course.link || 'dashboard/login.html'}>{course.title}</a>
              </h2>

              <div className="cmeta">
                <div className="smeta">
                  <i className="bx bx-user" />
                  {course.students}
                </div>

                <div className="smeta">
                  <i className="bx bx-file" />
                  {course.lessons} Lessons
                </div>

                {course.duration && (
                  <div className="smeta">
                    <i className="bx bx-time-five" />
                    {course.duration}
                  </div>
                )}
              </div>

              <div className="course_btm">
                <span className="cprice-2">{course.tags}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`single-course ${className}`}>
      <div className="course-img">
        <Image src={course.image} alt={`${course.title} course image`} width={300} height={200} />
        <span className="cprice">{course.level}</span>
      </div>

      <div className="course_content">
        <div className="crating">
          <a href="#">{renderStars(course.rating)}</a>
        </div>
        <h2>
          <a href={course.link || 'dashboard/login.html'}>{course.title}</a>
        </h2>

        <div className="cmeta">
          <div className="smeta">
            <i className="bx bx-user" />
            {course.students}
          </div>

          <div className="smeta">
            <i className="bx bx-file" />
            {course.lessons} Lessons
          </div>

          {course.duration && (
            <div className="smeta">
              <i className="bx bx-time-five" />
              {course.duration}
            </div>
          )}
        </div>

        <div className="course_btm">
          <span className="cprice-2">{course.tags}</span>
          <br />
        </div>
      </div>
    </div>
  )
}
