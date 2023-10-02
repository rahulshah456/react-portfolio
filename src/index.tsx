import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorsPage from "./pages/errors-page/ErrorsPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<ErrorsPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
