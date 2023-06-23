import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./pages/PersonalInfo";

import SelectPlan from "./pages/SelectPlan";
import PickAdds from "./pages/PickAdds";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { updateLocal } from "./store/registrationInfoSlice";
import Finish from "./pages/Finish";

//import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  const [clicked, setClicked] = useState<boolean>(false);
  const personalInfo = useAppSelector((store) => store.registrationInfo);
  const dispatch = useAppDispatch();

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
          element={<SelectPlan clicked={clicked} setClicked={setClicked} />}
        />
        <Route path="/adds" element={<PickAdds />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
}

export default App;
