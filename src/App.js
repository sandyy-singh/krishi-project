
import React from "react";
import Dashboard from "./Dashboard"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Dashboard />}></Route>
        <Route path="/signupfpo" element={<Dashboard />}></Route>
        <Route path="/otpforget" element={<Dashboard />}></Route>
        <Route path="/affiliatedfpo" element={<Dashboard />}> </Route>
        <Route path="/forgotpassword" element={<Dashboard />}></Route>
        <Route path="/nonaffiliatedfpo" element={<Dashboard />}></Route>
        <Route path="/createnewpassowrd" element={<Dashboard />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
