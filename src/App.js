// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import AgeCalculator from "./pages/tools/AgeCalculator";
import GstCalculator from "./pages/tools/GstCalculator";
import TextWordTool from "./pages/tools/TextWordTool";
import BMICalculator from "./pages/tools/BmiCalculator";
import JsonFormatter from "./pages/tools/JsonFormatter";
import Base64Tool from "./pages/tools/Base64Tool";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="tools">
          <Route path="age-calculator" element={<AgeCalculator />} />
          <Route path="/tools/gst-calculator" element={<GstCalculator />} />
          <Route path="/tools/text-word-tool" element={<TextWordTool />} />
          <Route path="/tools/bmi-calculator" element={<BMICalculator />} />
          <Route path="/tools/json-formatter" element={<JsonFormatter />} />
          <Route path="/tools/base64-encode-decode" element={<Base64Tool />} />
          {/* future tools:
              <Route path="sip-calculator" element={<SIPCalculator />} />
          */}
        </Route>
        <Route path="*" element={<div>404 – Page not found</div>} />
      </Route>
    </Routes>
  );
}
