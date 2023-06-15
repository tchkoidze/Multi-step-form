import React from "react";
//import RegistrationSteps from "../components/Registration-steps";
import { useForm } from "react-hook-form";

const PersonalInfo = () => {
  return (
    <div className="h-[100%] bg-sky">
      <form action="" className="h-[100%] relative">
        <div className="absolute bg-white mx-4 absolute top-[-72px]">
          <h1 className="text-blue">Personal info</h1>
          <p className="text-grey">
            Please provide your name, email address, and phone number.
          </p>
          <div>
            <label htmlFor="name" className="block text-blue">
              name
            </label>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              className="border border-light-grey rounded"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-blue">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              className="border border-light-grey rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-blue">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              placeholder="e.g. +1 234 567 890"
              className="border border-light-grey rounded"
            />
          </div>
          <div className="flex">
            <button className="bg-blue rounded px-4 py-3 ml-auto mr-8">
              Next Step
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
