import React from 'react';

function HeroSection() {
  return (
    <div className="relative bg-blue-900 text-white py-16" style={{ height: '80vh' }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-full">
        {/* Text Section */}
        <div className="text-left space-y-6">
          <h1 className="font-glass-antiqua text-5xl leading-snug">
            Learning on the Go with <span className="text-orange-500">IBScience</span>
          </h1>
          <p className="text-lg">Your gateway to knowledge.</p>
          <div className="space-x-4">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded">
              Learn More
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded">
              Find your course
            </button>
          </div>
        </div>

        {/* Student Images Section */}
        <div className="flex items-center justify-center">
          <img
            src="https://example.com/student-image.jpg" // Replace with actual student images
            alt="Student"
            className="rounded-lg shadow-lg h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
