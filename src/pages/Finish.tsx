import { useEffect, useState } from "react";
import RegistrationSteps from "../components/Registration-steps";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store/hooks";

const Finish = () => {
  const [active, setActive] = useState<boolean>(false);
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
      <div className="bg-white px-6 py-8 mx-4 rounded-[10px]">
        <div className="mb-[22px]">
          <h1 className="font-ubuntu text-blue mb-[9px]">Finishing up</h1>
          <p className="text-grey">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="flex flex-col gap-3"></div>
      </div>
      <div className="flex mt-auto bg-white p-8">
        <Link to={"/adds"} className="text-grey">
          Go Back
        </Link>
        <button type="submit" className="bg-blue rounded px-4 py-3 ml-auto">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Finish;
