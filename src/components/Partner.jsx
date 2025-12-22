import "./styles/Partner.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

// Images
import koushik11 from "../assets/koushik11.png";
import koushik12 from "../assets/koushik12.png";

export default function Partner() {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="partner-section">
      <div className="partner-decorative-circles">
        <div className="partner-circle-left"></div>
        <div className="partner-circle-right"></div>
      </div>

      <h2 className="partner-title" data-aos="fade-up">
        <span className="partner-title-big-p">P</span>
        <span className="partner-title-rest">ARTNERS PROFILE</span>
      </h2>

      <div className="partner-decorative-lines">
        <div className="partner-line-left"></div>
        <div className="partner-line-right"></div>
      </div>

      <div className="partner-card-container">
        <div
          className={`partner-card ${activeIndex === 0 ? "active" : ""}`}
          data-aos="fade-up"
          onClick={() => toggleCard(0)}
        >
          <div className="image-wrapper">
            <img src={koushik11} alt="Koushik Paul" />
          </div>

          <div className="partner-card-name">KOUSHIK PAUL</div>

          <div className="partner-hover-info">
            <h4>Partner – Operations & Decision-Making Head of Projects</h4>
            <p>
              Koushik Paul oversees project execution, operational compliance,
              and project-level strategic decisions. Drawing from his
              experience at Jindal Steel Ltd., he ensures timely, high-quality
              project delivery while managing teams and also operational
              processes across all sites.
            </p>
          </div>
        </div>

        <div
          className={`partner-card ${activeIndex === 1 ? "active" : ""}`}
          data-aos="fade-up"
          data-aos-delay="150"
          onClick={() => toggleCard(1)}
        >
          <div className="image-wrapper">
            <img src={koushik12} alt="Abhradeep Hazra" />
          </div>

          <div className="partner-card-name">ABHRADEEP HAZRA</div>

          <div className="partner-hover-info">
            <h4>Partner – Administrative Head & Group Decision-Making</h4>
            <p>
              Koushik Paul leads the administrative functions, finance,
              legal compliance, and corporate governance. With extensive
              experience at DSS Group, he is pivotal in group-level strategic
              decision-making, ensuring H & P Projects operates efficiently,
              ethically, and in line with best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
