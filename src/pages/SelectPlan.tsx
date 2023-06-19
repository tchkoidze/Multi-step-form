import React, { useState } from "react";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import { Link } from "react-router-dom";
import RegistrationSteps from "../components/Registration-steps";

const SelectPlan = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="h-[100%] flex flex-col">
      <RegistrationSteps />

      <div className=" bg-white px-6 py-8 mx-4 -translate-y-[72px] shadow-xl rounded-[10px]">
        <div className="mb-[22px]">
          <h1 className="text-blue mb-[9px]">Select your plan</h1>
          <p className="text-grey">
            You have the option of monthly or yearly billing.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-3.5 border border-grey border-solid rounded-lg px-4 pt-3.5 pb-[18px] ">
            <img src={Arcade} alt="arcade" />
            <div className="text-blue flex flex-col gap-1">
              <p>Arcade</p>
              {clicked ? <span>$90/yr</span> : <span>$9/mo</span>}
              {clicked && <p className="text-blue">2 months free</p>}
            </div>
          </div>
          <div className="flex gap-3.5 border border-grey border-solid rounded-lg px-4 pt-3.5 pb-[18px] ">
            <img src={Advanced} alt="arcade" />
            <div className="text-blue flex flex-col gap-1">
              <p>Advanced</p>
              {clicked ? <span>$120/yr</span> : <span>$12/mo</span>}
              {clicked && <p className="text-blue">2 months free</p>}
            </div>
          </div>
          <div className="flex gap-3.5 border border-grey border-solid rounded-lg px-4 pt-3.5 pb-[18px] ">
            <img src={Pro} alt="arcade" />
            <div className="text-blue flex flex-col gap-1">
              <p>Pro</p>
              {clicked ? <span>$150/yr</span> : <span>$15/mo</span>}
              {clicked && <p className="text-blue">2 months free</p>}
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <p className="text-blue">Monthly</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                checked={clicked}
                onChange={() => setClicked(!clicked)}
                className="sr-only peer"
              />
              <div className="w-[38px] h-5 bg-gray-200  rounded-full peer dark:bg-blue peer-checked:after:translate-x-[18px] peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-blue peer-checked:bg-blue"></div>
            </label>
            <p className="text-blue">yearly</p>
          </div>
        </div>
      </div>

      <div className="flex mt-auto bg-white p-8">
        <Link to={"/"} className="text-grey">
          Go Back
        </Link>
        <button type="submit" className="bg-blue rounded px-4 py-3 ml-auto">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default SelectPlan;
