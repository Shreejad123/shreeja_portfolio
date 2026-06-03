import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ContactSection from "./components/ContactSection.jsx";
import AboutSection from "./components/aboutSection.jsx";
import SkillsSection from "./components/skillsSection.jsx";
import ProjectSection from "./components/projectSection.jsx";
import { ThemeProvider } from "./context/ThemeContext";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <Routes>
        <Route path="/contact" element={<ContactSection />} />
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectSection />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>,
);
