import React, { useEffect, useState } from "react";
import Arcade from "../assets/images/icon-arcade.svg";
import Advanced from "../assets/images/icon-advanced.svg";
import Pro from "../assets/images/icon-pro.svg";
import { Link, useNavigate } from "react-router-dom";
import RegistrationSteps from "../components/Registration-steps";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { updateRegistrationInfo } from "../store/registrationInfoSlice";

interface SelectPlanProps {
  clicked: boolean;
  setClicked: React.Dispatch<React.SetStateAction<boolean>>;
  paymentPeriod: React.MutableRefObject<boolean>;
}

const SelectPlan: React.FC<SelectPlanProps> = ({
  clicked,
  setClicked,
  paymentPeriod,
}) => {
  const [active, setActive] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const registrationInfo = useAppSelector((state) => state.registrationInfo);

  console.log(registrationInfo);
  //const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNextStep = () => {
    // Check if any of the required options is selected
    const isAnyOptionSelected =
      registrationInfo.plan === "Arcade" ||
      registrationInfo.plan === "Advanced" ||
      registrationInfo.plan === "Pro";

    if (isAnyOptionSelected) {
      //if selected required options, move to next page
      navigate("/adds");
    } else {
      // Display an error message or handle the scenario where no option is selected
      console.log("Please select at least one option");
    }
  };

  console.log(registrationInfo.plan);
  useEffect(() => {
    if (active) {
      localStorage.setItem("formData", JSON.stringify(registrationInfo));
    } else setActive(true);
  }, [registrationInfo]);
  console.log(paymentPeriod);
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
          <div
            className={`flex gap-3.5 border border-grey border-solid rounded-lg px-4 pt-3.5 pb-[18px] ${
              registrationInfo.plan === "Arcade" ? "selected" : ""
            } hover:border-purple`}
            onClick={() => {
              dispatch(
                updateRegistrationInfo({ property: "plan", value: "Arcade" })
              );
              dispatch(
                updateRegistrationInfo({
                  property: "price",
                  value: registrationInfo.payment.includes("yearly")
                    ? "$90/year"
                    : "$9/month",
                })
              );
            }}
          >
            <img src={Arcade} alt="arcade" />
            <div className="text-blue flex flex-col gap-1">
              <p>Arcade</p>
              {registrationInfo.payment.includes("yearly") ? (
                <span>$90/yr</span>
              ) : (
                <span>$9/mo</span>
              )}
              {/*clicked && <p className="text-blue">2 months free</p>*/}
              {registrationInfo.payment.includes("yearly") && (
                <p className="text-blue">2 months free</p>
              )}
            </div>
          </div>
          <div
            className={`flex gap-3.5 border border-grey border-solid rounded-lg px-4 pt-3.5 pb-[18px] ${
              registrationInfo.plan === "Advanced" ? "selected" : ""
            } hover:border-purple`}
            onClick={() => {
              dispatch(
                updateRegistrationInfo({ property: "plan", value: "Advanced" })
              );
              dispatch(
                updateRegistrationInfo({
                  property: "price",
                  value: registrationInfo.payment.includes("yearly")
                    ? "$120/year"
                    : "$12/month",
                })
              );
            }}
          >
            <img src={Advanced} alt="arcade" />
            <div className="text-blue flex flex-col gap-1">
              <p>Advanced</p>
              {/*clicked ? <span>$120/yr</span> : <span>$12/mo</span>*/}
              {/*clicked && <p className="text-blue">2 months free</p>*/}
              {registrationInfo.payment.includes("yearly") ? (
                <span>$120/yr</span>
              ) : (
                <span>$12/mo</span>
              )}
              {registrationInfo.payment.includes("yearly") && (
                <p className="text-blue">2 months free</p>
              )}
            </div>
          </div>
          <div
            className={`flex gap-3.5 border border-grey border-solid rounded-lg px-4 pt-3.5 pb-[18px] ${
              registrationInfo.plan === "Pro" ? "selected" : ""
            } hover:border-purple `}
            onClick={() => {
              dispatch(
                updateRegistrationInfo({ property: "plan", value: "Pro" })
              );
              dispatch(
                updateRegistrationInfo({
                  property: "price",
                  value: registrationInfo.payment.includes("yearly")
                    ? "$150/year"
                    : "$15/month",
                })
              );
            }}
          >
            <img src={Pro} alt="arcade" />
            <div className="text-blue flex flex-col gap-1">
              <p>Pro</p>
              {/*clicked ? <span>$150/yr</span> : <span>$15/mo</span>*/}
              {/*clicked && <p className="text-blue">2 months free</p>*/}
              {registrationInfo.payment.includes("yearly") ? (
                <span>$150/yr</span>
              ) : (
                <span>$15/mo</span>
              )}
              {registrationInfo.payment.includes("yearly") && (
                <p className="text-blue">2 months free</p>
              )}
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center">
            <p className="text-blue">Monthly</p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                //checked={clicked}
                checked={registrationInfo.payment.includes("yearly")}
                onChange={() => {
                  paymentPeriod.current = !paymentPeriod.current;
                  setClicked(!clicked);
                  console.log(paymentPeriod);
                  const period = registrationInfo.payment.includes("monthly");
                  if (period) {
                    dispatch(
                      updateRegistrationInfo({
                        property: "payment",
                        value: "yearly",
                      })
                    );
                  } else {
                    dispatch(
                      updateRegistrationInfo({
                        property: "payment",
                        value: "monthly",
                      })
                    );
                  }
                }}
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

export default SelectPlan;
