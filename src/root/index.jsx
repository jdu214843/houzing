import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home } from "../components/Home";
import { Properties } from "../components/Properties";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/" element={<Navigate to={"/home"} />} />
        <Route path="*" element={<h1>NOT FOUND DATA</h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
