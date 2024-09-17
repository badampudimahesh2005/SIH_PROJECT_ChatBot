import React from 'react';
import B1 from '../assets/images/b1.jpg';
import { IMAGE } from '../utils/constants';
import Reviews from './Reviews';

const Body = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${IMAGE})` }}>
      {/* Overlay for image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Title on the image */}
      <div className="relative z-10 text-center text-white py-20">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Technical Education Portal</h1>
        <p className="mt-4 text-lg md:text-2xl">
          Simplifying Admissions for Engineering and Polytechnic Institutes
        </p>
      </div>

      {/* Content below the image */}
      <div className="my-48 bg-white py-10 px-6 md:px-20 text-center">
        <p className="text-gray-700 text-lg md:text-xl">
          The Department of Technical Education, Government of Rajasthan, assists with inquiries on admission processes, eligibility, fees, and more. Get all the information you need at your fingertips with our chatbot system.
        </p>
      </div>

      {/* Additional information section */}
      <div className=" flex flex-col container mx-auto px-4 py-8 ">
  <h2 className="text-2xl font-bold text-center mb-4">Why Choose Us</h2>
  
  <div className="flex flex-col md:flex-row justify-center items-center mb-4">
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-4">
        <i className="fas fa-check-circle text-blue-500 text-3xl"></i>
      </div>
      <h3 className="text-xl font-medium text-center">Expert Guidance</h3>
      <p className="text-gray-700 text-center">Our team of experienced counselors provides personalized guidance throughout the admission process.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-4">
        <i className="fas fa-graduation-cap text-green-500 text-3xl"></i>
      </div>
      <h3 className="text-xl font-medium text-center">Wide Range of Institutes</h3>
      <p className="text-gray-700 text-center">Explore a diverse selection of engineering and polytechnic institutes across Rajasthan.</p>
    </div>
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="flex justify-center items-center mb-4">
        <i className="fas fa-clock text-yellow-500 text-3xl"></i>
      </div>
      <h3 className="text-xl font-medium text-center">Time-Saving Process</h3>
      <p className="text-gray-700 text-center">Streamline your admission journey with our efficient online platform.</p>
    </div>
  </div>
</div>
  
    </div>
  );
};

export default Body;

