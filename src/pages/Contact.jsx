import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">Contact Me</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">Direct Contact</h2>
        <p className="mb-1">Email: skilaru4@aum.edu</p>
        <p className="mb-1">Phone: (123) 456-7890</p>
        <p>Location: Montgomery, US</p>
      </div>
      
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact