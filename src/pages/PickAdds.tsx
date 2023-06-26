import { useEffect, useState } from "react";
import RegistrationSteps from "../components/Registration-steps";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateRegistrationInfo } from "../store/registrationInfoSlice";
import Check from "../assets/images/icon-checkmark.svg";
import { number } from "yup";

interface SelectPlanProps {
  clicked: boolean;
}

const PickAdds: React.FC<SelectPlanProps> = ({ clicked }) => {
  const dispatch = useAppDispatch();
  const registrationInfo = useAppSelector((store) => store.registrationInfo);

  const navigate = useNavigate();
  const [active, setActive] = useState<boolean>(false);

  const [selectedAdds, setSelectedAdds] = useState<string[]>([]);

  const total = () => {
    if (clicked) {
      console.log(registrationInfo.ads);
      const arr1 = registrationInfo.ads.map((x) => {
        return x === "Online service"
          ? 10
          : x === "Larger storage"
          ? 2
          : x === "Customizable profile"
          ? 2
          : "";
      });
      console.log(arr1);
      const total = parseFloat(registrationInfo.price.replace(/[^\d.-]/g, ""));
      console.log(total);
      return total;
    }
  };

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

    //total();
  };

  console.log(selectedAdds);
  const handleNextStep = () => {
    // Dispatch the updateRegistrationInfo action with the selectedAds array
    //dispatch(updateRegistrationInfo({ property: "ads", value: selectedAdds }));
    // Other logic for the next step
    // Check if any of the required options is selected
    const isAnyOptionSelected =
      registrationInfo.ads.includes("Larger storage") ||
      registrationInfo.ads.includes("Online service") ||
      registrationInfo.ads.includes("Customizable profile");

    if (isAnyOptionSelected) {
      // Dispatch the updateRegistrationInfo action with the selectedAds array
      //dispatch(updateRegistrationInfo({ property: "ads", value: selectedAdds }));
      navigate("/finish");
      // Other logic for the next step
    } else {
      // Display an error message or handle the scenario where no option is selected
      console.log("Please select at least one option");
    }
  };

  const [online, setOnline] = useState("");
  const [largerStorage, setLargerStorage] = useState("");
  const [customizeProfile, setCustomizeProfile] = useState("");
  console.log(registrationInfo.ads);
  useEffect(() => {
    if (active) {
      localStorage.setItem("formData", JSON.stringify(registrationInfo));
    } else setActive(true);
  }, [registrationInfo]);

  useEffect(() => {
    // Dispatch the updateRegistrationInfo action whenever selectedAdds changes
    dispatch(updateRegistrationInfo({ property: "ads", value: selectedAdds }));
  }, [dispatch, selectedAdds]);

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
            //onClick={() => setOnline("Online service")}
            /* onClick={() => {
              setOnline((prevValue) =>
                prevValue === "Online service" ? "" : "Online service"
              );
              dispatch(
                updateRegistrationInfo({
                  property: "ads",
                  value: [..."Online service"],
                })
              );
            }}
            className={`flex items-center border border-grey rounded-lg px-4 py-3 ${
              online === "Online service" && "border-purple"
            }`}*/
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
              {clicked ? "+$10/yr" : "+$1/mo"}
            </p>
          </div>

          <div
            //onClick={() => setLargerStorage("Larger storage")}
            /*onClick={() => {
              setLargerStorage((prevValue) =>
                prevValue === "Larger storage" ? "" : "Larger storage"
              );
              dispatch(
                updateRegistrationInfo({
                  property: "ads",
                  value: [..."Larger storage"],
                })
              );
            }}
            className={`flex items-center border border-grey rounded-lg px-4 py-3 ${
              largerStorage === "Larger storage" && "border-purple"
            }`}*/
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
              {clicked ? "+$20/yr" : "+$2/mo"}
            </p>
          </div>

          <div
            // onClick={() => setCustomizeProfile("Customizable profile")}
            /*onClick={() =>
              setCustomizeProfile((prevValue) =>
                prevValue === "Customizable profile"
                  ? ""
                  : "Customizable profile"
              )
            }
            className={`flex items-center border border-grey rounded-lg px-4 py-3 ${
              customizeProfile === "Customizable profile" && "border-purple"
            }`}*/
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
              {clicked ? "+$20/yr" : "+$2/mo"}
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
