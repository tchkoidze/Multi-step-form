import { useEffect, useState } from "react";
import RegistrationSteps from "../components/Registration-steps";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";

interface SelectPlanProps {
  clicked: boolean;
}

const Finish: React.FC<SelectPlanProps> = ({ clicked }) => {
  const [active, setActive] = useState<boolean>(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const registrationInfo = useAppSelector((store) => store.registrationInfo);

  console.log(registrationInfo);

  useEffect(() => {
    if (active) {
      localStorage.setItem("formData", JSON.stringify(registrationInfo));
    } else setActive(true);
  }, [registrationInfo]);

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
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center border-b border-grey">
            <div>
              <h1 className="text-blue">{registrationInfo.plan}</h1>
              <Link className="text-grey" to={"./plan"}>
                Change
              </Link>
            </div>
            <h2 className="text-blue">{registrationInfo.price}</h2>
          </div>
          <div>
            {registrationInfo.ads.map((x) => (
              <div>
                <h2 className="text-grey">{x}</h2>
                <span className="text-grey">
                  {x === "Online service"
                    ? "$1/mo"
                    : x === "Larger storage"
                    ? "$2/mo"
                    : x === "Customizable profile"
                    ? "$2/mo"
                    : ""}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex mt-auto bg-white p-8">
        <Link to={"/adds"} className="text-grey">
          Go Back
        </Link>
        <button
          type="submit"
          onClick={() => navigate("/thank")}
          className="bg-blue rounded px-4 py-3 ml-auto"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Finish;
