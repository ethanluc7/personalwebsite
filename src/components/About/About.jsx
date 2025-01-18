import "./About.css";
import "../../index.css";
import { useEffect, useRef } from "react";
import fortnitelogo from "../../assets/fortnitelogo.png";
import minecraftlogo from "../../assets/minecraftlogo.png";
import monkeytypelogo from "../../assets/monkeytypelogo.jpg";
import netflixlogo from "../../assets/netflixlogo.png";
import overwatchlogo from "../../assets/overwatchlogo.png";
import stardewvalleylogo from "../../assets/stardew-valleylogo.png";
import valorantlogo from "../../assets/valorantlogo.png";
import visualstudiocodelogo from "../../assets/visual-studio-codelogo.png";
import anime from "animejs/lib/anime.es.js";

const About = ({ color }) => {
  const aboutRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const logos = document.querySelectorAll(".logo");

    logos.forEach((logo) => {
      logo.addEventListener("mouseenter", () => {
        anime({
          targets: logo,
          scale: 1.2,
          duration: 300,
          easing: "easeOutQuad",
        });
      });
      logo.addEventListener("mouseleave", () => {
        anime({
          targets: logo,
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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const playAnimation = () => {
    const tl = anime.timeline();

    tl.add({
      targets: ".about-header, .about-text",
      translateX: [-75, 0],
      opacity: [0, 1],
      easing: "easeOutQuad",
      duration: 700,
      delay: anime.stagger(300),
    }).add({
      targets: ".logo",
      scale: [0.5, 1],
      opacity: { value: [0, 1], easing: "linear" },
      easing: "cubicBezier(0.2, 1, 0.3, 1)",
      delay: anime.stagger(250),
    });
  };

  return (
    <div ref={aboutRef}>
      <div className="about-container">
        <div className="about-left">
          <div className={`about-header ${color}-middle`}>about</div>
          <div className="about-text-container">
            <h3 className="about-text top">
              hi!, my name is ethan, and i’m currently a first year student in
              1b studying math @ the university of waterloo.
            </h3>
            <h3 className="about-text">
              in my spare time, i enjoy playing video games, working out, rock
              climbing, and coding. you can find my games, and other hobbies on
              the right!
            </h3>
            <h3 className="about-text">
              i’ve spent a lot of time working with react, and anime.js,
              creating simple but smooth animations for webpages.
            </h3>
          </div>
        </div>

        <div className="main-logos-container">
          <div className="centering-logos-container">
            <div className="logos-container">
              <img className="logo" src={netflixlogo} alt="netflix logo" />
              <img className="logo" src={fortnitelogo} alt="fortnite logo" />
              <img className="logo" src={overwatchlogo} alt="overwatch logo" />
              <img className="logo" src={valorantlogo} alt="valorant logo" />
            </div>

            <div className="logos-container">
              <img
                className="logo"
                src={monkeytypelogo}
                alt="monkeytype logo"
              />
              <img
                className="logo"
                src={visualstudiocodelogo}
                alt="vs code logo"
              />
              <img className="logo" src={minecraftlogo} alt="minecraft logo" />
              <img
                className="logo"
                src={stardewvalleylogo}
                alt="stardew valley logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
