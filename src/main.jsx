import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contact from "./components/contact.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Project from "./components/project.jsx";
import { ThemeProvider } from "./context/ThemeContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
