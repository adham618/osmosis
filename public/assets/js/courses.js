// Course data
const coursesData = [
    {
        image: 'assets/img/courses/1.jpg',
        category: 'Photoshop',
        rating: 5,
        reviews: 21,
        title: 'Ultimate Photoshop Training: From Beginner',
        students: 25,
        lessons: 15,
        author: {
            image: 'assets/img/review/1.jpg',
            name: 'Masum Billah'
        },
        price: 500
    },
    {
        image: 'assets/img/courses/2.jpg',
        category: 'JavaScript',
        rating: 4,
        reviews: 18,
        title: 'Complete JavaScript Course for Beginners',
        students: 32,
        lessons: 20,
        author: {
            image: 'assets/img/review/2.jpg',
            name: 'Sarah Johnson'
        },
        price: 450
    },
    {
        image: 'assets/img/courses/3.jpg',
        category: 'Photography',
        rating: 5,
        reviews: 24,
        title: 'Professional Photography Masterclass',
        students: 28,
        lessons: 18,
        author: {
            image: 'assets/img/review/3.jpg',
            name: 'John Smith'
        },
        price: 600
    },
    {
        image: 'assets/img/courses/4.jpg',
        category: 'Web Design',
        rating: 4,
        reviews: 19,
        title: 'Modern Web Design Fundamentals',
        students: 35,
        lessons: 22,
        author: {
            image: 'assets/img/review/4.jpg',
            name: 'Emma Davis'
        },
        price: 550
    },
    {
        image: 'assets/img/courses/5.jpg',
        category: 'Marketing',
        rating: 5,
        reviews: 23,
        title: 'Digital Marketing Strategy',
        students: 40,
        lessons: 25,
        author: {
            image: 'assets/img/review/5.jpg',
            name: 'Michael Brown'
        },
        price: 475
    },
    {
        image: 'assets/img/courses/6.jpg',
        category: 'Business',
        rating: 4,
        reviews: 20,
        title: 'Business Management Essentials',
        students: 30,
        lessons: 16,
        author: {
            image: 'assets/img/review/6.jpg',
            name: 'Lisa Anderson'
        },
        price: 525
    }
];

// Pagination configuration
const itemsPerPage = 3;
let currentPage = 1;

// Function to generate star rating HTML
function generateStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += `<i class="fas fa-star${i < rating ? '' : '-o'}"></i>`;
    }
    return stars;
}

// Function to display courses for current page
function displayCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    if (!coursesGrid) return;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCourses = coursesData.slice(startIndex, endIndex);

    coursesGrid.innerHTML = currentCourses.map(course => `
        <div class="col-lg-4 col-md-6 col-12">
            <div class="single-course">
                <div class="course-image">
                    <a href="course-details.html">
                        <img src="${course.image}" alt="#">
                    </a>
                    <p class="price">${course.price}</p>
                </div>
                <div class="content">
                    <span class="tag">${course.category}</span>
                    <div class="meta-info">
                        <span class="rating">
                            ${generateStarRating(course.rating)}
                            <span class="average-rating">(${course.reviews} Reviews)</span>
                        </span>
                    </div>
                    <h3><a href="course-details.html">${course.title}</a></h3>
                    <ul class="course-meta">
                        <li><i class="far fa-user-alt"></i>${course.students} Students</li>
                        <li><i class="far fa-book-alt"></i>${course.lessons} Lessons</li>
                    </ul>
                    <div class="bottom-content">
                        <a href="instructor-profile.html" class="user">
                            <img src="${course.author.image}" alt="#">${course.author.name}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    updatePagination();
}

// Function to update pagination controls
function updatePagination() {
    const totalPages = Math.ceil(coursesData.length / itemsPerPage);
    const paginationContainer = document.querySelector('.post_pagination ul');
    if (!paginationContainer) return;

    let paginationHTML = '';
    
    // Previous button
    paginationHTML += `
        <li class="${currentPage === 1 ? 'disabled' : ''}">
            <a href="#" onclick="changePage(${currentPage - 1}); return false;">
                <i class="fas fa-angle-left"></i>
            </a>
        </li>
    `;

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <li class="${currentPage === i ? 'active' : ''}">
                <a href="#" onclick="changePage(${i}); return false;">${i}</a>
            </li>
        `;
    }

    // Next button
    paginationHTML += `
        <li class="${currentPage === totalPages ? 'disabled' : ''}">
            <a href="#" onclick="changePage(${currentPage + 1}); return false;">
                <i class="fas fa-angle-right"></i>
            </a>
        </li>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

// Function to change page
function changePage(newPage) {
    const totalPages = Math.ceil(coursesData.length / itemsPerPage);
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        displayCourses();
        window.scrollTo(0, document.querySelector('.courses-section').offsetTop - 100);
    }
}

// Initialize courses display when DOM is loaded
document.addEventListener('DOMContentLoaded', displayCourses); 