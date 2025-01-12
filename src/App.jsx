import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import { BrowserRouter } from "react-router-dom";
import { ColorProvider } from "./pages/ColorContext";

import "./index.css";

const App = () => {
  return (
    <ColorProvider>
      <BrowserRouter>
        <div className="snap">
          <HomePage />
          <AboutPage />
          <ProjectsPage />
        </div>
      </BrowserRouter>
    </ColorProvider>
  );
};

export default App;
