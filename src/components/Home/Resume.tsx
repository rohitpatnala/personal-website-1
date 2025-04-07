import "../styles/Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume section">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            This section provides a glimpse of my recent work and education.
          </p>
        </div>

        <div className="resume-columns">
          {/* ===== LEFT COLUMN ===== */}
          <div className="resume-left">
            <h3 className="resume-heading">Summary</h3>
            <div className="resume-item">
              <h4>Rohit Patnala</h4>
              <p className="fst-italic">
                Innovative and deadline-driven software developer with 8+ years
                of experience designing and developing user-centered
                applications and services from initial concept to final,
                polished deliverable.
              </p>
            </div>

            <h3 className="resume-heading">Education</h3>
            <div className="resume-item">
              <h4>Master of Technology</h4>
              <h5>2022 - 2024</h5>
              <p>
                <em>Indian Institute of Technology, Kanpur</em>
              </p>
              <p>
                Pursued a masters degree in communication systems to acquire
                strong foundation on next generation wireless technologies
                (5G/6G) and Quantum Computing.
              </p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Technology</h4>
              <h5>2012 - 2016</h5>
              <p>
                <em>Indian Institute of Technology, Kanpur</em>
              </p>
              <p>
                Pursued a bachelors degree in biological sciences and
                bioengineering to acquire strong foundation across genetics,
                neurobiology, bioinformatics and tissue engineering...
              </p>
            </div>

            <h3 className="resume-heading">Internship</h3>
            <div className="resume-item">
              <h4>Summer Research Intern</h4>
              <h5>2015</h5>
              <p>
                <em>National University of Singapore</em>
              </p>
              <p>
                Pursued my summer internship in the Bio-robotics lab at NUS.
                Worked on designing a universal wheel chair drive.
              </p>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ===== */}
          <div className="resume-right">
            <h3 className="resume-heading">
              Professional Experience <em>(Recent Only)</em>
            </h3>

            <div className="resume-item">
              <h4>Staff Software Engineer</h4>
              <h5>Nielsen</h5>
              <span className="resume-date">September 2024 - Feb 2025</span>
              <ul>
                <li>
                  Worked as an architect for an internal Machine Learning Ops
                  platform.
                </li>
                <li>
                  Mentor the team in managing the infrastructure resources on
                  AWS
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Engineer II</h4>
              <h5>Microsoft</h5>
              <span className="resume-date">
                February 2022 - September 2024
              </span>
              <ul>
                <li>
                  Mentored a team of 5 cross functional peers in the development
                  of robust UI workflows to seamlessly deploy 5G SaaS & IaaS
                  based configurations from cloud to edge devices, enhancing
                  deployment efficiency by 70%
                </li>
                <li>
                  Collaborated with product managers and principal architects to
                  identify system inefficiencies; optimized flows, revitalized
                  coding practices, and minimized crash rates by 40%, enhancing
                  overall user experience.
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>Software Engineer</h4>
              <h5>CBRE South Asia</h5>
              <span className="resume-date">July 2021 - Janury 2022</span>
              <ul>
                <li>
                  Designed a standalone API using AWS for a VR-based tool in
                  real estate, using Django REST framework to process polygon
                  coordinates; enhanced customer property visualization
                  experience by 60%.
                </li>
                <li>
                  Revamped microservices for an internal billing application
                  using Django, by developing restful APIs for report generation
                  and workflow forms; slashed processing time by 60% and
                  increased data accuracy by over 90%.
                </li>
              </ul>
            </div>

            <a
              href="https://docs.google.com/document/d/1UlH3kgaeiWkaGwjLF8GRjGe1GO4Wk9F8xtNBjBDaYXk/edit?usp=sharing"
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full resume
              <span className="resume-icon">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
