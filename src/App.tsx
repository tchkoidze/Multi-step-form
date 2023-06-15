import { Routes, Route } from "react-router-dom";

import PersonalInfo from "./pages/PersonalInfo";

import SelectPlan from "./pages/SelectPlan";
import RegistrationSteps from "./components/Registration-steps";

function App() {
  return (
    <>
      <RegistrationSteps />
      <Routes>
        <Route path="/" element={<PersonalInfo />} />
        <Route path="/plan" element={<SelectPlan />} />
      </Routes>
    </>
  );
}

export default App;
