import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../styles/Hero.css";

const Hero = () => {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Designer", "Developer", "Freelancer", "Musician"],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Rohit Patnala</h1>
        <p>
          I'm a <span ref={typedElement}></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
