import { useContext } from "react";
import { ColorContext } from "./ColorContext";
import "../index.css";
import About from "../components/About/About";

const AboutPage = () => {
  const { color } = useContext(ColorContext);

  return (
    <div id="about">
      <div className="about-page">
        <About color={color} />
      </div>
    </div>
  );
};

export default AboutPage;
