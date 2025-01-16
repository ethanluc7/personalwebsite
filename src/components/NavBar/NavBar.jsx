import anime from "animejs/lib/anime.es.js";
import { Mail } from "lucide-react";
import "./NavBar.css";
import "../../index.css";
import githubLogo from "../../assets/githublogo.png";
import linkedInLogo from "../../assets/linkedinlogo.png";
import { HashLink } from "react-router-hash-link";
import { useEffect } from "react";

const NavBar = ({ color }) => {
  useEffect(() => {
    const icons = document.querySelectorAll(".icons");
    const links = document.querySelectorAll(".link");

    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        anime({
          targets: icon,
          scale: 1.2,
          duration: 300,
          easing: "easeOutQuad",
        });
      });

      icon.addEventListener("mouseleave", () => {
        anime({
          targets: icon,
          scale: 1,
          duration: 300,
          easing: "easeOutQuad",
        });
      });
    });

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        anime({
          targets: link,
          scale: 1.2,
          duration: 300,
          easing: "easeOutQuad",
        });
      });

      link.addEventListener("mouseleave", () => {
        anime({
          targets: link,
          scale: 1,
          duration: 300,
          easing: "easeOutQuad",
        });
      });
    });

    // setTimeout(() => {
    //   anime({
    //     targets: ".selector",
    //     scale: [1, 1.1],
    //     easing: "easeInOutSine",
    //     duration: 1000,
    //     direction: "alternate",
    //     loop: true,
    //   });
    // }, 310 * 5 + 1200);

  
    return () => {
      icons.forEach((icon) => {
        icon.removeEventListener("mouseenter", null);
        icon.removeEventListener("mouseleave", null);
      });

      links.forEach((link) => {
        link.removeEventListener("mouseenter", null);
        link.removeEventListener("mouseleave", null);
      });
    };


  
  
  
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <a href="https://github.com/ethanluc7">
              <img className="icons" src={githubLogo} alt="GitHub logo" />
            </a>

            <a href="https://www.linkedin.com/in/ethan-luc-29035325a/">
              <img className="icons" src={linkedInLogo} alt="LinkedIn logo" />
            </a>

            <a href="mailto:ethan.q.luc@gmail.com">
              <Mail className="icons email" alt="Mail logo" color="black" />
            </a>
          </div>

          <div className={`header-right ${color}`}>
            <HashLink
              to="#home"
              smooth
              className={`link left-most ${color}-left`}
            >
              home
            </HashLink>

            <HashLink to="#about" smooth className={`link ${color}-middle`}>
              about
            </HashLink>

            <HashLink
              to="#projects"
              smooth
              className={`link right-most ${color}-right`}
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
