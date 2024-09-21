import React from 'react';

function CourseCarousel() {
  const courses = [
    { title: 'Physics', description: 'Explore Physics', bgColor: '#10027E', arrowColor: '#FF7E00' },
    { title: 'Chemistry', description: 'Dive into Chemistry', bgColor: '#FF7E00', arrowColor: '#10027E' },
    { title: 'Mathematics', description: 'Master Mathematics', bgColor: '#10027E', arrowColor: '#FF7E00' },
    { title: 'Biology', description: 'Study Biology', bgColor: '#FF7E00', arrowColor: '#10027E' },
    { title: 'English', description: 'Improve your English', bgColor: '#10027E', arrowColor: '#FF7E00' },
    { title: 'History', description: 'Learn History', bgColor: '#FF7E00', arrowColor: '#10027E' },
    { title: 'Geography', description: 'Understand Geography', bgColor: '#10027E', arrowColor: '#FF7E00' },
    { title: 'Computer Science', description: 'Code with CS', bgColor: '#FF7E00', arrowColor: '#10027E' },
    { title: 'Economics', description: 'Economics Essentials', bgColor: '#10027E', arrowColor: '#FF7E00' },
  ];

  return (
    <div className="flex overflow-x-scroll scrollbar-hide space-x-6 p-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="relative flex-shrink-0 w-80 h-80 rounded-lg shadow-md transition-transform transform hover:scale-105"
          style={{ backgroundColor: course.bgColor }}
        >
          <div className="p-6 h-full flex flex-col justify-between">
            <div>
              <h2 className="text-white text-xl mb-4">{course.title}</h2>
              <p className="text-white">{course.description}</p>
            </div>
            <div
              className="absolute right-2 bottom-2 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-transform transform hover:scale-110"
              style={{ backgroundColor: course.arrowColor }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseCarousel;
