import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>,
);
