import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { Home } from "../components/Home";

export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<h1>Properties</h1>} />
        <Route path="*" element={<h1>NOT FOUND DATA</h1>} />
        <Route path="/" element={<Navigate to={"/home"}></Navigate>} />
      </Routes>
    </BrowserRouter>
  );
};
export default Root;
