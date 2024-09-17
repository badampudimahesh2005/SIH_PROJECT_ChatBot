import React from 'react';
import { IMAGE } from '../utils/constants';

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

      
  
    </div>
  );
};

export default Body;

