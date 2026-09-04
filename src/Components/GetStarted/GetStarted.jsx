import React from "react";
import userImg from "../../assets/user.png";
import packageImg from "../../assets/package.png";
import rocketImg from "../../assets/rocket.png";

const GetStarted = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto my-16 py-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold my-2">Get Started In 3 Steps</h1>
          <p>Start using premium digital tools in minutes not hours</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 my-10">
          <div className="bg-white rounded-xl py-16 px-4 relative shadow-xl">
            <div className="bg-gradient-to-r from-purple-700 to-purple-400 text-white px-3 py-2 rounded-full w-fit absolute top-3 right-3">
              01
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-purple-200 p-3 rounded-full">
                <img src={userImg} alt="" />
              </div>
              <h1 className="font-bold text-2xl">Create Account</h1>
              <p>Sign up for free in seconds. No Credit card required to get started.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl py-16 px-4 relative shadow-xl">
            <div className="bg-gradient-to-r from-purple-700 to-purple-400 text-white px-3 py-2 rounded-full w-fit absolute top-3 right-3">
              02
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-purple-200 p-3 rounded-full">
                <img src={packageImg} alt="" />
              </div>
              <h1 className="font-bold text-2xl">Choose Products</h1>
              <p>Browse our catalog to choose best of best.</p>
            </div>
          </div>
          <div className="bg-white rounded-xl py-16 px-4 relative shadow-xl">
            <div className="bg-gradient-to-r from-purple-700 to-purple-400 text-white px-3 py-2 rounded-full w-fit absolute top-3 right-3">
              03
            </div>

            <div className="flex flex-col items-center text-center gap-3">
              <div className="bg-purple-200 p-3 rounded-full">
                <img src={rocketImg} alt="" />
              </div>
              <h1 className="font-bold text-2xl">Start Creating</h1>
              <p>Download and start using your premium tools immedietly.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
