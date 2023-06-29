import { useLocation } from "react-router-dom";
//import Bg from "../assets/images/bg-sidebar-mobile.svg";

const RegistrationSteps = () => {
  const location = useLocation();
  return (
    <div className="h-[172px] bg-[url('./assets/images/bg-sidebar-mobile.svg')] bg-cover bg-no-repeat">
      <ul className="flex gap-4 justify-center font-ubuntu font-bold text-sm/[16px] tracking[1px] uppercase pt-8">
        <li
          className={`w-[33px] h-[33px] flex items-center justify-center border border-white rounded-[50%] ${
            location.pathname === "/"
              ? "bg-sky-light border-sky-light text-blue"
              : ""
          }`}
        >
          1
        </li>
        <li
          className={`w-[33px] h-[33px] flex items-center justify-center border border-white rounded-[50%] ${
            location.pathname === "/plan"
              ? "bg-sky-light border-sky-light text-blue"
              : ""
          }`}
        >
          2
        </li>
        <li
          className={`w-[33px] h-[33px] flex items-center justify-center border border-white rounded-[50%] ${
            location.pathname === "/adds"
              ? "bg-sky-light border-sky-light text-blue"
              : ""
          }`}
        >
          3
        </li>
        <li
          className={`w-[33px] h-[33px] flex items-center justify-center border border-white rounded-[50%] ${
            location.pathname === "/finish" || location.pathname === "/thank"
              ? "bg-sky-light border-sky-light text-blue"
              : ""
          }`}
        >
          4
        </li>
      </ul>
    </div>
  );
};

export default RegistrationSteps;
