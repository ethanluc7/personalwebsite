import anime from "animejs/lib/anime.es.js";
import "./NavBar.css";
import "../../index.css";
import email from "../../assets/email.png";
import githubLogo from "../../assets/githublogo.png";
import linkedInLogo from "../../assets/linkedinlogo.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const NavBar = ({ color }) => {
  useEffect(() => {
    const tl = anime.timeline();

    tl.add({
      targets: ".icons, .rose, .first",
      translateY: [-50, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 700,
      delay: anime.stagger(240),
    }).add({
      targets: ".text",
      translateY: [50, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 700,
      delay: anime.stagger(240),
    });
  }, []);

  // anime({
  //     targets: ".header ",          // Target the element with the class "box"
  //     translateY: [-50, 0],    // Slide down from -100px to its original position
  //     opacity: [0, 1],          // Fade in from 0 to 1
  //     duration: 700,           // Animation duration in milliseconds
  //     easing: "easeOutQuad",    // Smooth easing
  //   });
  // }, []);

  // hover effect over icons in navigation bar

  return (
    <nav>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <a href="https://github.com/ethanluc7">
              <img className="icons" src={githubLogo} alt="github logo" />
            </a>

            <a href="https://www.linkedin.com/in/ethan-luc-29035325a/">
              <img className="icons" src={linkedInLogo} alt="linkedin logo" />
            </a>

            <a href="mailto:ethan.q.luc@gmail.com">
              <img className="icons email" src={email} alt="email logo" />
            </a>
          </div>

          <div className={`header-right ${color}`}>
            <HashLink
              to="#home"
              smooth
              className={`rose left-most ${color}-left`}
            >
              home
            </HashLink>

            <HashLink 
             to="#about" 
             smooth 
             className={`rose ${color}-middle`}
             >
              about
            </HashLink>

            <HashLink
              to="#projects"
              smooth
              className={`rose right-most ${color}-right `}
            >
              projects
            </HashLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
