import LandingPage from "./pages/landing-page/LandingPage";
import SkillsPage from "./pages/skills-page/SkillsPage";
import ExperiencePage from "./pages/experience-page/ExperiencePage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import AboutPage from "./pages/about-page/AboutPage";
import { ConfigProvider } from "antd";
import NavMenu from "./components/nav/NavMenu";
import { useEffect, useState } from "react";
import { DarkTheme, Theme } from "./theme/Theme";

const App = () => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const cachedTheme = localStorage.getItem("isDark");
    console.log(cachedTheme);
    if (cachedTheme === "true") {
      setDark(true);
    } else {
      setDark(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isDark", isDark ? "true" : "false");
  }, [isDark]);

  return (
    <ConfigProvider theme={isDark ? DarkTheme : Theme}>
      <div style={{ position: "relative" }}>
        <NavMenu isDark={isDark} setDark={setDark} />
        <LandingPage id="home" />
        <SkillsPage id="skills" />
        <ExperiencePage id="experience" />
        <ProjectsPage id="projects" />
        <AboutPage id="about" />
      </div>
    </ConfigProvider>
  );
};

export default App;
