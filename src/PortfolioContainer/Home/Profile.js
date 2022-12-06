import React from "react";
import "./Profile.css";
import Typical from "react-typical";

const Profile = () => {
  return (
    <div className="portfolio-container">
      <div className="profile-parent">
        <div className="profilr-detail">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/profile.php?id=100008808946997">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox">
                <i className="fa fa-envelope"></i>
              </a>
              <a href="https://www.instagram.com/p.r.e.m.18/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCP2BKjaTZb_SH-8TG38WEVQ">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://twitter.com/pream3825">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {""}
            Hello,I'M <span className="highlighted-text">Pream Kumar</span>
          </span>
        </div>
        <div className="profile-details-role">
          <span className="prinary-text">
            {" "}
            <h1>
              {" "}
              <Typical
                loop={Infinity}
                steps={[
                  "Ethusiastic Dev 🔴",
                  1000,
                  "Front End Dev  ✅",
                  1000,
                  "React Dev 😎",
                  1000,
                  "React-Native Dev 🔵",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Knack of building applications with front and back end operations.
            </span>
          </span>
        </div>
        <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
          </button>
          <a href="PreamKumar Resume.pdf" download="PreamKumar Resume.pdf">
            <button className="btn highlighted-btn">Get Resume </button>
          </a>
        </div>
      </div>
      <div className="profile-picture">
        <div className="profile-picture-background"></div>
      </div>
    </div>
  );
};

export default Profile;
