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
        title = "Knowthentic";
        metaDescription = "Welcome to Knowthentic.";
        break;
      case "/skill-plan":
        title = "Knowthentic";
        metaDescription = "Plan your skill learning path with Knowthentic.";
        break;
      case "/roadmap":
        title = "Knowthentic";
        metaDescription = "View your generated learning roadmap.";
        break;
      case "/auth":
        title = "Knowthentic";
        metaDescription = "Authenticate yourself to use Knowthentic.";
        break;
      default:
        title = "Knowthentic";
        metaDescription = "Welcome to Knowthentic.";
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
