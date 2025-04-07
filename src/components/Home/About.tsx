import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "../styles/About.css";

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section Title */}
        <div className="section-title" data-aos="fade-up">
          <h2>About</h2>
          <p>
            An IIT Kanpur graduate offering 8+ years of professional work
            experience across the fields of Software Architecture, Design &
            Engineering, Data Analytics, UI/UX Design & Development, and Team
            Management.
          </p>
        </div>

        {/* Bio Row */}
        <div
          className="row about-content"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-left">
            <img
              src="/images/Rohit.jpeg"
              className="img-fluid profile-img"
              alt="Rohit Patnala"
            />
          </div>
          <div className="col-right">
            <h3>Full Stack Developer</h3>
            <p className="fst-italic">
              Aspired to become a data scientist but then life destined me
              towards developing a passion towards software engineering.
            </p>
            <div className="info-grid">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Birthday:</strong> <span>16 April 1994</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>LinkedIn:</strong>{" "}
                  <a href="https://www.linkedin.com/in/rohitpatnala">
                    @rohitpatnala
                  </a>
                </li>
                {/* <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Phone:</strong> <span>+91 966 3535 087</span>
                </li> */}
                <li>
                  <i className="bi bi-chevron-right"></i> <strong>City:</strong>{" "}
                  <span>Bangalore, IND</span>
                </li>
              </ul>
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> <strong>Age:</strong>{" "}
                  <span>30</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Qualifications:</strong>{" "}
                  <span>B.Tech, Masters from IIT Kanpur</span>
                </li>
                {/* <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Email:</strong> <span>rohit.patnala16@gmail.com</span>
                </li> */}
                <li>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <strong>Available for work:</strong> <span>Yes</span>
                </li>
              </ul>
            </div>
            <p className="about-summary">
              Over my 8+ years of experience, I've worked on developing robust
              and scalable backend services using C# & Python (across different
              projects) and have also worked on developing intellectual user
              interfaces. With time, I find myself passionate about developing
              interesting user interfaces, but that doesn't limit me to extend
              my contributions for the backend aspect of things.
            </p>
          </div>
        </div>
        {/* ✅ Experience Counters */}
        <div
          className="experience-counters"
          data-aos="fade-up"
          data-aos-delay="200"
          ref={ref}
        >
          <div className="counter-box">
            <i className="bi bi-building"></i>
            <span>{inView ? <CountUp end={5} duration={2} /> : "0"}</span>
            <p>
              <strong>Companies</strong> I’ve worked with
            </p>
          </div>
          <div className="counter-box">
            <i className="bi bi-kanban"></i>
            <span>{inView ? <CountUp end={15} duration={2} /> : "0"}</span>
            <p>
              <strong>Projects</strong> I’ve worked on
            </p>
          </div>
          <div className="counter-box">
            <i className="bi bi-trophy"></i>
            <span>{inView ? <CountUp end={3} duration={2} /> : "0"}</span>
            <p>
              <strong>Awards</strong> I’ve won
            </p>
          </div>
          <div className="counter-box">
            <i className="bi bi-people"></i>
            <span>{inView ? <CountUp end={4} duration={2} /> : "0"}</span>
            <p>
              <strong>Team size</strong> I’ve managed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
