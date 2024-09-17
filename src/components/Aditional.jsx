import React from 'react'

const aditional = () => {
  return (
    <div>
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
  )
}

export default aditional