import React from "react";
import "./SideBar.css";
import { assets } from "../../assets/frontend/assets";

const SideBar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img
          src={assets.wikipediaLogo}
          alt="wikipedia"
          className="sidebar-wikipedia-logo"
        />
        <h2>WIKIPEDIA</h2>
        <h5>The Free Encyclopedia</h5>
      </div>
      <div className="sidebar-options">
        <h5>CONTENTS</h5>
        <ul>
          <li>
            <a href="">Abstract</a>
          </li>
          <li>
            <a href="">Reference</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
