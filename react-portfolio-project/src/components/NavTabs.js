import React from "react";

function NavTabs({ currentTab, handleTabChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handleTabChange("Home")}
          className={currentTab === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handleTabChange("About")}
          className={currentTab === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handleTabChange("Portfolio")}
          className={
            currentTab === "Portfolio" ? "nav-link active" : "nav-link"
          }
        ></a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handleTabChange("Resume")}
          className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
        ></a>
      </li>
    </ul>
  );
}

export default NavTabs;
