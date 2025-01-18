import { useState, useEffect, useRef } from "react";
import "../../index.css";
import mapabledimage from "../../assets/mapabled.png";
import welltrackerimage from "../../assets/welltracker.png";
import defaultimage from "../../assets/default.jpg";
import pomodorotimerimage from "../../assets/pomodoro-timer.png";
import anime from "animejs/lib/anime.es.js";
import "./Projects.css";

const Projects = ({ color }) => {
  const ProjectsRef = useRef(null);
  const hasAnimated = useRef(false);
  const [displayImage, setDisplayImage] = useState(defaultimage);
  const [description, setDescription] = useState("");

  const descriptions = [
    "A full-stack pomodoro-timer that includes activity tracking, and a minimalistic design.",
    "A web app of a map that displays the locations of accessibility features",
    "A simple python application that allows you to input and view data about Wells",
  ];

  const changeProject = (index, imgSrc) => {
    setDisplayImage(imgSrc);

    const tl = anime.timeline();

    tl.add({
      targets: ".revealer",
      translateX: ["101%", "0%"],
      duration: 800,
      easing: "easeOutCubic",
      complete: () => {
        setDescription(descriptions[index]);
      },
    }).add({
      targets: ".image",
      scale: [0.8, 1],
      opacity: [0, 1],
      filter: ["blur(10px)", "blur(0px)"],
      easing: "easeOutExpo",
      duration: 800,
    });
  };

  const playAnimation = () => {
    const tl = anime.timeline();

    tl.add({
      targets: ".projects-header, .project",
      translateX: [-75, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 700,
      delay: anime.stagger(300),
    }).add({
      targets: ".revealer",
      translateX: ["-101%", "0%"],
      duration: 800,
      easing: "easeOutCubic",
    });
  };

  useEffect(() => {
    const projects = document.querySelectorAll(".project-name");

    projects.forEach((project) => {
      project.addEventListener("mouseenter", () => {
        anime({
          targets: project,
          scale: [1, 1.2],
          duration: 300,
          easing: "easeOutQuad",
        });
      });

      project.addEventListener("mouseleave", () => {
        anime({
          targets: project,
          scale: 1,
          duration: 300,
          easing: "easeOutQuad",
        });
      });
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          playAnimation();
        }
      },
      { threshold: 0.5 }
    );

    if (ProjectsRef.current) {
      observer.observe(ProjectsRef.current);
    }

    return () => {
      if (ProjectsRef.current) {
        observer.unobserve(ProjectsRef.current);
      }
    };
  }, []);

  return (
    <div ref={ProjectsRef}>
      <div className="projects-container">
        <div className={`projects-header ${color}-middle`}>projects</div>

        <div className="projects-main">
          <div className={`projects`}>
            <div className="project top">
              <h3
                className={`project-name ${color}-middle`}
                onMouseEnter={() => changeProject(0, pomodorotimerimage)}
              >
                Pomodoro Timer App
              </h3>
              <h3 className={`project-info ${color}-right`}>
                Typescript, Python, Next.js, Flask, PostgresSQL, AWS
              </h3>
            </div>

            <div className="project">
              <h3
                className={`project-name ${color}-middle`}
                onMouseEnter={() => changeProject(1, mapabledimage)}
              >
                Interactive Accessible Map{" "}
              </h3>
              <h3 className={`project-info ${color}-right`}>
                Python, DJango, Google Maps API
              </h3>
            </div>

            <div className="project">
              <h3
                className={`project-name ${color}-middle`}
                onMouseEnter={() => changeProject(2, welltrackerimage)}
              >
                {" "}
                Well Tracker
              </h3>
              <h3 className={`project-info ${color}-right`}>Python, Tkinter</h3>
            </div>
          </div>

          <div className="projects-right">
            <div className={`projects-image`}>
              <div className={`revealer ${color}-border`}></div>
              <img
                className={`image ${
                  displayImage === defaultimage ? "hidden" : ""
                }`}
                src={displayImage}
                alt="Project"
              />
            </div>
            <div className="project-about">
              <h3 className={`description-text ${color}-right`}>
                {description}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
