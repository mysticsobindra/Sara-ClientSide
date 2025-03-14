import React, { Dispatch, SetStateAction, useState } from "react";

interface props {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  IsNavBarActive: boolean;
}

const PageContentNav: React.FC<props> = ({ setIsActive, IsNavBarActive }) => {
  const [IsProfileActive, setIsProfileActive] = useState(false);
  const [IsSettingActive, setIsSettingActive] = useState(false);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ border: "3px solid white " }}
    >
      <header>
        <div className="container-fluid header-container">
          <div className="menu-logo-wrap d-flex">
            <button
              onClick={() => setIsActive(!IsNavBarActive)}
              type="button"
              id="sidebarCollapse"
              className="btn"
            >
              <i className="fa fa-bars"></i>
              <span className="sr-only">Toggle Menu</span>
            </button>
            <div className="logo">
              <img src="assets/images/logo/logo.png" alt="" />
              <img src="assets/images/logo/logo-icon.png" alt="" />
            </div>
          </div>
          <div className="deposit">
            <i className="icon-wallet"></i>
            <span>145 Points</span>
          </div>
          <div className="header-options">
            <div className="profile">
              <button
              onClick={()=>{setIsProfileActive(!IsProfileActive); setIsSettingActive(false)} }
                className="pp-link"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="assets/images/profile.jpg" alt="Profile" />
              </button>
              <ul
                className="profile-options"
                role="menu"
                aria-label="Profile options"
                aria-hidden="true"
                style={{ display: `${IsProfileActive ? 'block' : 'none'}` }}
              >
                <li>
                  <a href="profile.html">
                    <i  className="icon-user"></i>Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="logout">
                    <i className="icon-power-off"></i>Log Out
                  </a>
                </li>
              </ul>
            </div>
            <div className="settings-option">
              <i onClick={()=>{ setIsSettingActive(!IsSettingActive); setIsProfileActive(false)}} className="icon-setting"></i>
              <ul className="settings " style={{ display: `${IsSettingActive ? 'block' :'none'}` }}>
                <li className="audio">
                  <span>Music</span>
                  <div className="toggle-button">
                    <input type="checkbox" id="audio-toggle" checked />
                    <label htmlFor="audio-toggle"></label>
                  </div>
                </li>
                <li className="audio">
                  <span>SFX</span>
                  <div className="toggle-button">
                    <input type="checkbox" id="sfx-audio-toggle" checked />
                    <label htmlFor="sfx-audio-toggle"></label>
                  </div>
                </li>
                <li className="fs">
                  <span>Full Screen</span>
                  <i className="icon-full"></i>
                </li>
                <li>
                  <a href="#" className="logout">
                    Log Out<i className="icon-power-off"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default PageContentNav;
