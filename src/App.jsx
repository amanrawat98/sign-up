import React from "react";
import SignUp from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
const App = () => {
  return (
    <div className="bg-[#171925] w-full h-fit min-h-screen md:h-screen flex items-center justify-center py-1 md:py-5 ">
      <Router>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
