import React from "react";
import LandingPage from "./pages/landing-page/LandingPage";
import SkillsPage from "./pages/skills-page/SkillsPage";
import ExperiencePage from "./pages/experience-page/ExperiencePage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import AboutPage from "./pages/about-page/AboutPage";
import { ConfigProvider, theme } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0d6efd",
        },
      }}
    >
      <LandingPage />
      <SkillsPage />
      <ExperiencePage />
      <ProjectsPage />
      <AboutPage />
    </ConfigProvider>
  );
}

export default App;
