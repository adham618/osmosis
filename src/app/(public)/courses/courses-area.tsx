import React from 'react'

import CourseCard, { type Course } from './course-card'

export default function CoursesArea() {
  const popularCourses: Course[] = [
    {
      id: '1',
      title: 'Anatomy, Physiology, and Kinesiology',
      image: '/assets/img/courses/anatomy.png',
      category: 'Science',
      level: 'K-12',
      rating: 5,
      students: '1-10 Students',
      lessons: 15,
      tags: 'IB, IGCSE'
    },
    {
      id: '2',
      title: 'Introduction to Robotics and Electrical Engineering',
      image: '/assets/img/courses/robotics.png',
      category: 'Engineering',
      level: 'K-12',
      rating: 5,
      students: '1-25 Students',
      lessons: 22,
      tags: 'General'
    },
    {
      id: '3',
      title: 'Oceans and Marine Biology',
      image: '/assets/img/courses/oceans.png',
      category: 'Science',
      level: 'K-12',
      rating: 4,
      students: '1-50 Students',
      lessons: 10,
      tags: 'General'
    },
    {
      id: '4',
      title: 'Introduction to Chemistry',
      image: '/assets/img/courses/chemistry.png',
      category: 'Science',
      level: 'College',
      rating: 4,
      students: '1-25 Students',
      lessons: 29,
      tags: 'AP, IB, College'
    }
  ]

  const allCourses: Course[] = [
    {
      id: '5',
      title: 'Exploring the Stars: Astronomy and Introductory Astrophysics',
      image: '/assets/img/courses/astronomy.png',
      category: 'Science',
      level: 'College',
      rating: 5,
      students: '1-25 Students',
      lessons: 10,
      tags: 'AP, IB, College'
    },
    {
      id: '6',
      title: 'Ancient Cultures: The Study of Human Civilization',
      image: '/assets/img/courses/ancientciv.png',
      category: 'History',
      level: 'K-12',
      rating: 5,
      students: '1-50 Students',
      lessons: 20,
      tags: 'IB, IGCSE'
    },
    {
      id: '7',
      title: 'An Introduction to Conservation Biology',
      image: '/assets/img/courses/conservation.png',
      category: 'Science',
      level: 'College',
      rating: 4,
      students: '1-10 Students',
      lessons: 11,
      tags: 'College'
    },
    {
      id: '8',
      title: 'CJUS 301: Introduction to Forensic Science',
      image: '/assets/img/courses/forensics.png',
      category: 'Science',
      level: 'College',
      rating: 5,
      students: '1-25 Students',
      lessons: 27,
      tags: 'College'
    },
    {
      id: '9',
      title: "Introduction to Geology: Reading the Earth's Story",
      image: '/assets/img/courses/geology.png',
      category: 'Science',
      level: 'College',
      rating: 4,
      students: '25 Students',
      lessons: 15,
      duration: '1.5 Hours',
      tags: 'College, General'
    },
    {
      id: '10',
      title: 'PHYS 101: Introduction to Physics and Mechanics',
      image: '/assets/img/courses/physics.png',
      category: 'Science',
      level: 'College',
      rating: 5,
      students: '1-25 Students',
      lessons: 19,
      tags: 'AP, College, IB'
    }
  ]

  return (
    <>
      <section className="courses" style={{ marginTop: '5%', marginBottom: '0%' }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-md-8 wow fadeInUp">
              <div className="section-title">
                <span>Explore</span>
                <h2>Most Popular Courses</h2>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 align-self-center text-end title_btn wow fadeIn">
              <a href="#all-courses" className="bg_btn bt">
                View All
              </a>
            </div>

            {popularCourses.map((course) => (
              <div key={course.id} className="col-xl-6 col-lg-6 wow fadeIn">
                <CourseCard course={course} variant="horizontal" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="all-courses" className="courses section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>All Courses</h1>
              <br />
            </div>

            {allCourses.map((course) => (
              <div key={course.id} className="col-xl-4 col-md-6 col-12 wow fadeIn">
                <CourseCard course={course} />
              </div>
            ))}

            <div className="col-12 text-center">
              <div className="post_pagination">
                <ul>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="dashboard/login.html">2</a>
                  </li>
                  <li>
                    <a href="dashboard/login.html">3</a>
                  </li>
                  <li>
                    <a href="dashboard/login.html">
                      <i className="fa-solid fa-arrow-right-long" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
