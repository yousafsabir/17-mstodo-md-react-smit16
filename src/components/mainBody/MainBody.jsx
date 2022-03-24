import React from "react";
import MenuSidebarSvg from "../../assets/MenuSidbarSvg.jsx";
import SunSvg from "../../assets/SunSvg.jsx";
import StarSvg from "../../assets/StarSvg.jsx";
import CalendarSvg from "../../assets/CalendarSvg.jsx";
import UserSvg from "../../assets/UserSvg.jsx";
import HomeSvg from "../../assets/HomeSvg.jsx";
import "./MainBody.css";
export default function MainBody() {
  const sidebarIconColor = "#797775";
  const sidebarIconWidth = 20;

  return (
    <div className="mainBody">
      <section className="sidebar" id="sidebar">
        <div className="sidebarDivs">
          <MenuSidebarSvg stroke={sidebarIconColor} width={sidebarIconWidth} />
        </div>
        <div className="sidebarDivs">
          <SunSvg stroke={sidebarIconColor} width={sidebarIconWidth} />
          <p className="bold">My Day</p>
        </div>
        <div className="sidebarDivs">
          <StarSvg stroke={sidebarIconColor} width={sidebarIconWidth} />
          <p>Important</p>
        </div>
        <div className="sidebarDivs">
          <CalendarSvg stroke={sidebarIconColor} width={sidebarIconWidth} />
          <p>Planned</p>
        </div>
        <div className="sidebarDivs">
          <UserSvg stroke={sidebarIconColor} width={sidebarIconWidth} />
          <p>Assigned to me</p>
        </div>
        <div className="sidebarDivs">
          <HomeSvg stroke={sidebarIconColor} width={sidebarIconWidth} />
          <p>Tasks</p>
        </div>
        <div className="sidebarDivs"></div>
      </section>
      <section className="main" id="main"></section>
    </div>
  );
}
