import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Sidebar.css";

const sectionIds = [
  "hero",
  "about",
  "resume",
  "coursework",
  "portfolio",
  "contact",
];

const Sidebar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.5, // 50% of the section must be visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location]);

  const isActive = (sectionId: string) =>
    activeSection === sectionId ? "active" : "";

  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="/images/Rohit.jpeg"
            alt="Rohit Patnala"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light title">
            <a href="#hero">Rohit Patnala</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://www.facebook.com/rohit.patnala16/"
              target="_blank"
              className="facebook"
            >
              <i className="bi bi-facebook" />
            </a>
            <a
              href="https://www.instagram.com/rohitpatnala/"
              target="_blank"
              className="instagram"
            >
              <i className="bi bi-instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/rohitpatnala/"
              target="_blank"
              className="linkedin"
            >
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className={`nav-link ${isActive("hero")}`}>
                <i className="bi bi-house" /> Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${isActive("about")}`}>
                <i className="bi bi-person" /> About
              </a>
            </li>
            <li>
              <a href="#resume" className={`nav-link ${isActive("resume")}`}>
                <i className="bi bi-file-earmark" /> Resume
              </a>
            </li>
            <li>
              <a className="nav-link disabled">
                <i className="bi bi-journal-code" /> Coursework
              </a>
            </li>
            <li>
              <a className="nav-link disabled">
                <i className="bi bi-images" /> Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link disabled">
                <i className="bi bi-envelope" /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
