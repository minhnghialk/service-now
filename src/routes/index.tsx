import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";

const RouteSetup = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSetup;
