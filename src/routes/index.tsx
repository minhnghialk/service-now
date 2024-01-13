import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import PhoneSignIn from "../pages/signin/PhoneSignIn";
import SignInRole from "../pages/signin/SignInRole";

const RouteSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>

        {/* User */}
        <Route path="signin" element={<PhoneSignIn />}></Route>
        <Route path="signin/role" element={<SignInRole />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSetup;
