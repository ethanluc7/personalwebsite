import { useContext } from "react";
import { ColorContext } from "./ColorContext";
import "../index.css";
import Projects from "../components/Projects/Projects";


const ProjectsPage = () => {
  const { color } = useContext(ColorContext);

  return (
    <div id="projects">
      <div className="projects-page"> 
        <Projects color = {color} />
      </div>
    </div>
  );
};

export default ProjectsPage;
