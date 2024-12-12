import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./containers/home";
import PercentageFunded from "./containers/percentageFunded";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/percentage-funded" element={<PercentageFunded />} />
    </Routes>
  );
};

export default AppRouter;
