import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
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
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.1,
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
      const el = document.getElementById(id);
      if (el) observer.observe(el);
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
            alt=""
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light title">
            <NavLink to="/">Rohit Patnala</NavLink>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className={`nav-link ${isActive("hero")}`}>
                <i className="bi bi-house"></i> Home
              </a>
            </li>
            <li>
              <a href="#about" className={`nav-link ${isActive("about")}`}>
                <i className="bi bi-person"></i> About
              </a>
            </li>
            <li>
              <a href="#resume" className={`nav-link ${isActive("resume")}`}>
                <i className="bi bi-file-earmark"></i> Resume
              </a>
            </li>
            {/* <li>
              <a
                href="#coursework"
                className={`nav-link ${isActive("coursework")}`}
              >
                <i className="bi bi-journal-code"></i> Coursework
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`nav-link ${isActive("portfolio")}`}
              >
                <i className="bi bi-images"></i> Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className={`nav-link ${isActive("contact")}`}>
                <i className="bi bi-envelope"></i> Contact
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
