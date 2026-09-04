import React from 'react';

const Ready = () => {
  return (
    <div className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] mt-16 py-16">
      <div className="text-white">
        <h1 className="text-center text-3xl font-bold">Ready to Transform Your Workflow?</h1>
        <p className="text-center py-3 text-gray-200">
          Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.
        </p>
        <div className="flex items-center justify-center gap-8">
          <div className="bg-white text-center py-3 px-4 rounded-3xl my-2">
            <button className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Explore Products
            </button>
          </div>
          <button className="px-4 py-3 border-1 border-gray-300 rounded-4xl">View Pricing</button>
        </div>
        <p className="text-center text-gray-200">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Ready;