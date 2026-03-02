import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./components/contact.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
);
