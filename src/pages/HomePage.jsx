import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import SideBar from "../components/SideBar/SideBar";
import { ColorContext } from "./ColorContext";
import { useContext } from "react";
import "../index.css";

const HomePage = () => {
  const { color } = useContext(ColorContext);

  return (
    <div id="home" className="grid">
      <div className="nav">
        <NavBar color={color} />
      </div>

      <div className="main">
        <Hero color={color} />
      </div>

      <div className="sidebar">
        <SideBar />
      </div>
    </div>
  );
};

export default HomePage;
