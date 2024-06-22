import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/home-page";
import SkillPlan from "./pages/skill-plan";
import Auth from "./components/auth";
import RoadmapPage from "./pages/roadmappage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home - My Project";
        metaDescription = "Welcome to the home page of My Project.";
        break;
      case "/skill-plan":
        title = "Skill Plan - My Project";
        metaDescription = "Plan your skill learning path with My Project.";
        break;
      case "/roadmap":
        title = "Roadmap - My Project";
        metaDescription = "View your generated learning roadmap.";
        break;
      case "/auth":
        title = "Auth - My Project";
        metaDescription = "Authenticate yourself to use My Project.";
        break;
      default:
        title = "My Project";
        metaDescription = "Welcome to My Project.";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/skill-plan" element={<SkillPlan />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/roadmap" element={<RoadmapPage />} />
    </Routes>
  );
}

export default App;
