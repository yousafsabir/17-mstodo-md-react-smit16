import React from "react";
import { useState } from "react";
import MenuSidebarSvg from "../../assets/MenuSidbarSvg.jsx";
import SunSvg from "../../assets/SunSvg.jsx";
import StarSvg from "../../assets/StarSvg.jsx";
import CalendarSvg from "../../assets/CalendarSvg.jsx";
import UserSvg from "../../assets/UserSvg.jsx";
import HomeSvg from "../../assets/HomeSvg.jsx";
import CircleSvg from "../../assets/CircleSvg.jsx";
import CircleTickSvg from "../../assets/CircleTickSvg.jsx";
import "./MainBody.css";
export default function MainBody() {
  const sidebarIconColor = "#797775";
  const sidebarIconWidth = 20;

  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [completedArray, setCompletedArray] = useState([]);

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
      <section className="main" id="main">
        <div className="mainHeading">
          <div className="headingUpper">
            <p className="heading">My Day</p>
            <p className="headingDots">...</p>
          </div>
          <p className="headingDate">Friday, March 25</p>
        </div>
        <div className="inputForm">
          {/* <div className="3radio"></div> */}
          <CircleSvg />
          <input
            type="text"
            value={task}
            className="formInput"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="formButton"
            onClick={() => {
              setTaskArray([...taskArray, task]);
              setTask("");
            }}
          >
            Add
          </button>
        </div>
        <div className="output">
          <table className="pending">
            <thead>
              <tr>
                <td>Task</td>
              </tr>
            </thead>
            <tbody>
              {taskArray.map((data, index) => {
                return (
                  <tr
                    className="circleHover"
                    onClick={() => {
                      let completeArray = taskArray.splice(index, 1);
                      console.log(completeArray);
                      setTaskArray([...taskArray]);
                      setCompletedArray([...completedArray, completeArray]);
                    }}
                  >
                    <td>
                      <CircleSvg />
                    </td>
                    <td>{data}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p
            style={{
              fontSize: "1.125rem",
              color: "var(--clr-black)",
              marginLeft: "10px",
              marginBottom: "6px",
            }}
          >
            Completed
          </p>
          <table className="completed">
            <tbody>
              {completedArray.map((data, index) => {
                return (
                  <tr>
                    <td>
                      <CircleTickSvg />
                    </td>
                    <td className="linedTask">{data}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
