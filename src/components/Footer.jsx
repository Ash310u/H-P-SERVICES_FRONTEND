import React from "react";
import "./styles/Footer.css";

import logo from "../assets/logo.png";

import facebookIcon from "../assets/footer1.png";
import instagramIcon from "../assets/footer2.png";
import twitterIcon from "../assets/footer3.png";
import linkedinIcon from "../assets/footer4.png";
import youtubeIcon from "../assets/footer5.png";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo-row">
            <img src={logo} alt="H&P Logo" className="footer-logo" />
            <h2 className="footer-title">H&P Projects</h2>
          </div>

          <p className="footer-desc">
            Ready to transform your vision into reality? Our team is prepared to
            guide you through every step.
          </p>

          {/* SOCIAL MEDIA LINKS */}
          <div className="footer-social">
            <a
              href="https://www.facebook.com/share/1Bgz1SJfZx"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/hpprojectspvtltd?igsh=NnEyZXY3dGQ0YWhp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitterIcon} alt="Twitter / X" />
            </a>

            <a
              href="https://www.linkedin.com/company/h-p-projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
            </a>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtubeIcon} alt="YouTube" />
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="footer-divider"></div>

        {/* RIGHT */}
        <div className="footer-right">
          <div>
            <h4>Email</h4>
            <a href="mailto:info@hpprojects.com.au">
              info@hpprojects.com.au
            </a>
          </div>

          <div>
            <h4>Phone</h4>
            <a href="tel:+918984030821">+91 8984030821</a>
            <br />
            <a href="tel:+919332627903">+91 9332627903</a>
          </div>

          <div>
            <h4>Office</h4>
            <p>
              Address: B/28, Gholui, Balichak, Kharagpur, Paschim Medinipur,
              West Bengal – 721124
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="footer-bottom-row">
        <p>© 2024 H&P Projects. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Cookies settings</a>
        </div>
      </div>
    </footer>
  );
}
