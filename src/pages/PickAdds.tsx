import RegistrationSteps from "../components/Registration-steps";
import { Link } from "react-router-dom";

const PickAdds = () => {
  return (
    <div className="flex flex-col h-[100%]">
      <RegistrationSteps />
      <div className="bg-white px-6 py-8 mx-4 rounded-[10px]">
        <div className="mb-[22px]">
          <h1 className="font-ubuntu text-blue mb-[9px]">Pick add-ons</h1>
          <p className="text-grey">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center border border-grey rounded-lg px-4 py-3">
            <div className="w-5 h-5 border border-grey rounded"></div>
            <div className="ml-4">
              <h3 className="font-ubuntu font-medium text-sm/[16px]  text-blue">
                Online service
              </h3>
              <p className="font-ubuntu font-normal text-xs/[20px] text-grey">
                Access to multiplayer games
              </p>
            </div>
            <p className="font-ubuntu font-normal text-xs/[20px] text-sky-blue ml-auto">
              +$1/mo
            </p>
          </div>

          <div className="flex items-center border border-grey rounded-lg px-4 py-3">
            <div className="w-5 h-5 border border-grey rounded"></div>
            <div className="ml-4 ">
              <h3 className="font-ubuntu font-medium text-sm/[16px]  text-blue">
                Larger storage
              </h3>
              <p className="font-ubuntu font-normal text-xs/[20px] text-grey">
                Extra 1TB of cloud save
              </p>
            </div>
            <p className="font-ubuntu font-normal text-xs/[20px] text-sky-blue ml-auto">
              +$2/mo
            </p>
          </div>

          <div className="flex items-center border border-grey rounded-lg px-4 py-3">
            <div className="w-5 h-5 border border-grey rounded"></div>
            <div className="ml-4">
              <h3 className="font-ubuntu font-medium text-sm/[16px]  text-blue">
                Customizable profile
              </h3>
              <p className="font-ubuntu font-normal text-xs/[20px] text-grey">
                Custom theme on your profile
              </p>
            </div>
            <p className="font-ubuntu font-normal text-xs/[20px] text-sky-blue ml-auto">
              +$2/mo
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-auto bg-white p-8">
        <Link to={"/plan"} className="text-grey">
          Go Back
        </Link>
        <button type="submit" className="bg-blue rounded px-4 py-3 ml-auto">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PickAdds;
