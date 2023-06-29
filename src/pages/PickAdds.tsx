import { useEffect, useState } from "react";
import RegistrationSteps from "../components/Registration-steps";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateRegistrationInfo } from "../store/registrationInfoSlice";
import Check from "../assets/images/icon-checkmark.svg";

interface SelectPlanProps {
  clicked: boolean;
}

const PickAdds: React.FC<SelectPlanProps> = ({ clicked }) => {
  const dispatch = useAppDispatch();
  const registrationInfo = useAppSelector((store) => store.registrationInfo);

  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);

  const [selectedAdds, setSelectedAdds] = useState<string[]>([]);

  /*const handleAddClick = (add: string) => {
    // Check if the ad is already selected
    const isSelected = registrationInfo.ads.includes(add);
    if (isSelected) {
      // Remove the ad from the selectedAds array
      console.log(123);
      const updatedAdds = selectedAdds.filter(
        (selectedAdd) => selectedAdd !== add
      );
      setSelectedAdds(updatedAdds);
    } else {
      console.log(isSelected);
      console.log(780);
      // Add the ad to the selectedAds array
      setSelectedAdds([...selectedAdds, add]);
      console.log(selectedAdds);
    }
    // Wait for the state update to complete

    console.log(selectedAdds);
    // Dispatch the updateRegistrationInfo action with the selectedAdds array
    dispatch(updateRegistrationInfo({ property: "ads", value: selectedAdds }));
  };*/

  const handleAddClick = (add: string) => {
    console.log(registrationInfo.ads);
    const beenselected = registrationInfo.ads.includes(add);
    console.log(beenselected);
    if (!beenselected) {
      console.log(5);
      dispatch(
        updateRegistrationInfo({
          property: "ads",
          value: [...registrationInfo.ads, add],
        })
      );
    } else {
      const updateAdds = registrationInfo.ads.filter(
        (selectedAdd) => selectedAdd !== add
      );
      dispatch(
        updateRegistrationInfo({
          property: "ads",
          value: updateAdds,
        })
      );
    }
  };

  console.log(selectedAdds);
  const handleNextStep = () => {
    // Check if any of the required options is selected
    const isAnyOptionSelected =
      registrationInfo.ads.includes("Larger storage") ||
      registrationInfo.ads.includes("Online service") ||
      registrationInfo.ads.includes("Customizable profile");

    if (isAnyOptionSelected) {
      navigate("/finish");
      // Other logic for the next step
    } else {
      // Display an error message or handle the scenario where no option is selected
      console.log("Please select at least one option");
    }
  };

  console.log(registrationInfo.ads);
  useEffect(() => {
    if (active) {
      console.log(234);
      localStorage.setItem("formData", JSON.stringify(registrationInfo));
    } else setActive(true);
    console.log(789);
    console.log(registrationInfo.ads);
  }, [registrationInfo]);

  return (
    <div className="flex flex-col h-[100%]">
      <RegistrationSteps />
      <div className="bg-white px-6 py-8 mx-4 rounded-[10px] -translate-y-[72px]">
        <div className="mb-[22px]">
          <h1 className="font-ubuntu text-blue mb-[9px]">Pick add-ons</h1>
          <p className="text-grey">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div
            onClick={() => handleAddClick("Online service")}
            className={`flex items-center border border-grey rounded-lg px-4 py-3 ${
              registrationInfo.ads.includes("Online service") &&
              "border-purple "
            }`}
          >
            <div
              className={`w-5 h-5 border flex items-center justify-center border-grey rounded ${
                registrationInfo.ads.includes("Online service")
                  ? "border-purple bg-purple !important"
                  : ""
              }}`}
            >
              {registrationInfo.ads.includes("Online service") && (
                <img src={Check} />
              )}
            </div>
            <div className="ml-4">
              <h3 className="font-ubuntu font-medium text-sm/[16px]  text-blue">
                Online service
              </h3>
              <p className="font-ubuntu font-normal text-xs/[20px] text-grey">
                Access to multiplayer games
              </p>
            </div>
            <p className="font-ubuntu font-normal text-xs/[20px] text-sky-blue ml-auto">
              {registrationInfo.payment.includes("yearly")
                ? "+$10/yr"
                : "+$1/mo"}
            </p>
          </div>

          <div
            onClick={() => handleAddClick("Larger storage")}
            className={`flex items-center border border-grey rounded-lg px-4 py-3 ${
              registrationInfo.ads.includes("Larger storage") && "border-purple"
            }`}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center border border-grey rounded ${
                registrationInfo.ads.includes("Larger storage")
                  ? "border-purple bg-purple !important"
                  : ""
              }}`}
            >
              {registrationInfo.ads.includes("Larger storage") && (
                <img src={Check} />
              )}
            </div>

            <div className="ml-4 ">
              <h3 className="font-ubuntu font-medium text-sm/[16px]  text-blue">
                Larger storage
              </h3>
              <p className="font-ubuntu font-normal text-xs/[20px] text-grey">
                Extra 1TB of cloud save
              </p>
            </div>
            <p className="font-ubuntu font-normal text-xs/[20px] text-sky-blue ml-auto">
              {registrationInfo.payment.includes("yearly")
                ? "+$20/yr"
                : "+$2/mo"}
            </p>
          </div>

          <div
            onClick={() => handleAddClick("Customizable profile")}
            className={`flex items-center border border-grey rounded-lg px-4 py-3 ${
              registrationInfo.ads.includes("Customizable profile") &&
              "border-purple"
            }`}
          >
            <div
              className={`w-5 h-5 flex items-center justify-center border border-grey rounded ${
                registrationInfo.ads.includes("Customizable profile")
                  ? "border-purple bg-purple !important"
                  : ""
              }}`}
            >
              {registrationInfo.ads.includes("Customizable profile") && (
                <img src={Check} />
              )}
            </div>
            <div className="ml-4">
              <h3 className="font-ubuntu font-medium text-sm/[16px]  text-blue">
                Customizable profile
              </h3>
              <p className="font-ubuntu font-normal text-xs/[20px] text-grey">
                Custom theme on your profile
              </p>
            </div>
            <p className="font-ubuntu font-normal text-xs/[20px] text-sky-blue ml-auto">
              {registrationInfo.payment.includes("yearly")
                ? "+$20/yr"
                : "+$2/mo"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-auto bg-white p-8">
        <Link to={"/plan"} className="text-grey">
          Go Back
        </Link>
        <button
          onClick={handleNextStep}
          type="submit"
          className="bg-blue rounded px-4 py-3 ml-auto"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default PickAdds;
