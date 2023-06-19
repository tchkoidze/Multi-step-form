import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./pages/PersonalInfo";

import SelectPlan from "./pages/SelectPlan";
import PickAdds from "./pages/PickAdds";

//import { useAppDispatch, useAppSelector } from "./store/hooks";

function App() {
  //const personalInfo = useAppSelector((store) => store.personalInfo);
  //const dispatch = useAppDispatch();

  return (
    <div className="h-[100%] bg-sky">
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/plan" element={<SelectPlan />} />
        <Route path="/adds" element={<PickAdds />} />
      </Routes>
    </div>
  );
}

export default App;
