import "./SideBar.css";
import "../../index.css";
import { useState, useEffect, useContext } from "react";
import { ColorContext } from "../../pages/ColorContext";
import anime from "animejs/lib/anime.es.js";

const SideBar = () => {
  const [startButtonStatus, setStartButtonStatus] = useState(false);
  const [otherButtonStatus, setOtherButtonStatus] = useState(true);
  const { setColor } = useContext(ColorContext);
  const [colors] = useState([
    "purple-orange",
    "blue-green",
    "pink-blue",
    "peach",
  ]);

  const [hide, setHide] = useState("");

  const changeColor = (index) => {
    [colors[0], colors[index]] = [colors[index], colors[0]];
  };

  const animate = (index) => {
    const tl = anime.timeline();

    if (startButtonStatus === false) {
      setStartButtonStatus((prevState) => !prevState);
      setHide("");

      tl.add({
        targets: ".selector",
        translateY: function (el) {
          return [el.getAttribute("data-from"), el.getAttribute("data-to")];
        },
        scaleY: [0, 1],
        duration: 1800,
        opacity: {
          value: 1,
          duration: 10,
        },
        delay: anime.stagger(240),
      });
    } else if (startButtonStatus === true) {
      tl.add({
        targets: ".selector ",
        translateY: function (el) {
          return [el.getAttribute("data-to"), 0];
        },
        duration: 400,
        delay: anime.stagger(60),
        easing: "easeInOutSine",
        complete: function () {
          changeColor(index);
          setColor(colors[0]);
          setStartButtonStatus((prevState) => !prevState);
          setHide("hide");
        },
      });
    }
  };

  useEffect(() => {
    const tl = anime.timeline();

    tl.add({
      targets: ".icons, .link, .first",
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
      delay: anime.stagger(240, { start: 400 }),
    });

    setTimeout(() => {
      animate();
      setStartButtonStatus(true);
      setOtherButtonStatus(false);
    }, 310 * 5);

    setTimeout(() => {
      anime({
        targets: ".selector",
        scale: [1, 1.1],
        easing: "easeInOutSine",
        duration: 1000,
        direction: "alternate",
        loop: true,
      });
    }, 310 * 5 + 1200);
  }, []);

  return (
    <section>
      <div className="color-selectors">
        <button
          onClick={() => {
            animate();
          }}
          disabled={startButtonStatus}
          className={`selector first ${colors[0]}`}
        />
        <button
          onClick={() => {
            animate(1);
          }}
          disabled={otherButtonStatus}
          className={`selector second ${colors[1]} ${hide}`}
          data-from="0"
          data-to="60"
        />
        <button
          onClick={() => {
            animate(2);
          }}
          disabled={otherButtonStatus}
          className={`selector third  ${colors[2]} ${hide}`}
          data-from="80"
          data-to="120"
        />
        <button
          onClick={() => {
            animate(3);
          }}
          disabled={otherButtonStatus}
          className={`selector fourth  ${colors[3]} ${hide}`}
          data-from="140"
          data-to="180"
        />
      </div>

      <svg height="0" width="0">
        <defs>
          <filter id="gooey-effect">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9"
              result="gooey-effect"
            />
            <feComposite
              in="SourceGraphic"
              in2="gooey-effect"
              operator="atop"
            />
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default SideBar;
