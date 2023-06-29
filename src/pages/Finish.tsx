import { useEffect, useState } from "react";
import RegistrationSteps from "../components/Registration-steps";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import axios from "axios";

interface SelectPlanProps {
  clicked: boolean;
}

const BASE_URL = import.meta.env.VITE_BACK_URL;

const Finish: React.FC<SelectPlanProps> = ({ clicked }) => {
  const [active, setActive] = useState<boolean>(false);
  const [sum, setSum] = useState<number>(0);

  const navigate = useNavigate();

  const registrationInfo = useAppSelector((store) => store.registrationInfo);

  console.log(registrationInfo);

  const addRegistration = async () => {
    try {
      await axios.post(`${BASE_URL}`, {
        name: registrationInfo.name,
        email: registrationInfo.email,
        phone: registrationInfo.phone,
        plan: registrationInfo.plan,
        price: registrationInfo.price,
        payment: registrationInfo.payment,
        ads: registrationInfo.ads,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const total = () => {
    if (clicked) {
      console.log(registrationInfo.ads);
      const arr1 = registrationInfo.ads.map((x) => {
        return x === "Online service"
          ? 10
          : x === "Larger storage"
          ? 20
          : x === "Customizable profile"
          ? 20
          : 0;
      });
      console.log(arr1);

      const total =
        parseFloat(registrationInfo.price.replace(/[^\d.-]/g, "")) +
        arr1.reduce(
          (accumulator: number, currentValue: number) =>
            accumulator + currentValue,
          0
        );

      console.log(total);
      setSum(total);
      return total;
    } else {
      const arr1 = registrationInfo.ads.map((x) => {
        return x === "Online service"
          ? 1
          : x === "Larger storage"
          ? 2
          : x === "Customizable profile"
          ? 2
          : 0;
      });

      const total =
        parseFloat(registrationInfo.price.replace(/[^\d.-]/g, "")) +
        arr1.reduce(
          (accumulator: number, currentValue: number) =>
            accumulator + currentValue,
          0
        );
      setSum(total);
      return total;
    }
  };

  useEffect(() => {
    if (active) {
      localStorage.setItem("formData", JSON.stringify(registrationInfo));
    } else setActive(true);
    total();
  }, [registrationInfo, registrationInfo.ads]);

  return (
    <div className="flex flex-col h-[100%]">
      <RegistrationSteps />
      <div className="bg-white px-6 py-8 mx-4 rounded-[10px] -translate-y-[72px]">
        <div className="mb-[22px]">
          <h1 className="font-ubuntu text-blue mb-[9px]">Finishing up</h1>
          <p className="text-grey">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-[#F8F9FF] p-4 rounded">
          <div className="flex justify-between items-center border-b border-grey pb-3">
            <div>
              <h1 className="text-blue font-ubuntu font-medium text-[14px] leading-4">
                {registrationInfo.plan}
                {clicked ? "(Yearly)" : "(Monthly)"}
              </h1>
              <Link className="text-grey underline" to={"./plan"}>
                Change
              </Link>
            </div>
            <h2 className="text-blue">{registrationInfo.price}</h2>
          </div>
          <ul>
            {registrationInfo.ads.map((x, index) => (
              <li key={index} className="flex justify-between">
                <h2 className="text-grey">{x}</h2>
                <span className="text-grey">
                  {x === "Online service"
                    ? clicked
                      ? "$10/yr"
                      : "$1/mo"
                    : x === "Larger storage"
                    ? clicked
                      ? "$20/yr"
                      : "$2/mo"
                    : x === "Customizable profile"
                    ? clicked
                      ? "$20/yr"
                      : "$2/mo"
                    : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-between px-3 my-5">
          <p className="text-grey ">
            Total{clicked ? "(per year)" : "(per month)"}
          </p>
          <span className="text-purple">{`$${sum}${
            clicked ? "/yr" : "/mo"
          }`}</span>
        </div>
      </div>
      <div className="flex mt-auto bg-white p-8">
        <Link to={"/adds"} className="text-grey">
          Go Back
        </Link>
        <button
          type="submit"
          onClick={() => {
            navigate("/thank");
            addRegistration();
          }}
          className="bg-blue rounded px-4 py-3 ml-auto"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Finish;
