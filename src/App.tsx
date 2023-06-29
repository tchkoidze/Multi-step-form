import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./pages/PersonalInfo";

import SelectPlan from "./pages/SelectPlan";
import PickAdds from "./pages/PickAdds";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateLocal } from "./store/registrationInfoSlice";
import Finish from "./pages/Finish";
import Thank from "./pages/Thank";

//import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const [clicked, setClicked] = useState<boolean>(false);
  const personalInfo = useAppSelector((store) => store.registrationInfo);
  const dispatch = useAppDispatch();
  //default false means monthly, payment, when it becomes true it will be yeatly payment
  const paymentPeriod = useRef(false);

  console.log(personalInfo);

  useEffect(() => {
    console.log(345);
    let storedFormData = localStorage.getItem("formData");
    console.log(storedFormData);
    if (storedFormData) {
      dispatch(updateLocal(JSON.parse(storedFormData)));
      console.log(dispatch(updateLocal(JSON.parse(storedFormData))));
    }
  }, [dispatch]);

  return (
    <div className="h-[100%] bg-sky">
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route
          path="/plan"
          element={
            <SelectPlan
              clicked={clicked}
              setClicked={setClicked}
              paymentPeriod={paymentPeriod}
            />
          }
        />
        <Route path="/adds" element={<PickAdds />} />
        <Route path="/finish" element={<Finish clicked={clicked} />} />
        <Route path="/thank" element={<Thank />} />
      </Routes>
    </div>
  );
}

export default App;
