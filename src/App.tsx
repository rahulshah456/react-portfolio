import LandingPage from "./pages/landing-page/LandingPage";
import SkillsPage from "./pages/skills-page/SkillsPage";
import ExperiencePage from "./pages/experience-page/ExperiencePage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import AboutPage from "./pages/about-page/AboutPage";
import { ConfigProvider } from "antd";
import NavMenu from "./components/nav/NavMenu";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0d6efd",
        },
      }}
    >
      <div style={{ position: "relative", backgroundColor: "#F6F6F6" }}>
        <NavMenu />
        <LandingPage id="home" />
        <SkillsPage id="skills" />
        <ExperiencePage id="experience" />
        <ProjectsPage id="projects" />
        <AboutPage id="about" />
      </div>
    </ConfigProvider>
  );
}

export default App;
