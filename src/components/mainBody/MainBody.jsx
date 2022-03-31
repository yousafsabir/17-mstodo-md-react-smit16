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
import moment from "moment";
import PencilSvg from "../../assets/PencilSvg.jsx";
import BinSvg from "../../assets/BinSvg.jsx";
import "./MainBody.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { actionCreators } from "../../state/index.js";





export default function MainBody() {
  const dispatch = useDispatch();
  const action=bindActionCreators(actionCreators,dispatch);
  const storeTask = useSelector (state => state.todo);
  const sidebarIconColor = "#797775";
  const sidebarIconWidth = 20;
  const pendingTaskActionColor = "#0078d7";

  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const [completedArray, setCompletedArray] = useState([]);
  const [updateSwitch, setUpdateSwitch] = useState(false);
  const [indexedit, setIndexedit] = useState();
  const [buttonValue, setButtonValue] = useState("Add");
  const current = new Date();
  const todaysDate = current.getDate();
  const today = moment().format("dddd");
  const month = moment().format("MMMM");
  let nthGenerator = "";
  if (todaysDate == 1) {
    nthGenerator = "st";
  } else if (todaysDate == 2) {
    nthGenerator = "nd";
  } else if (todaysDate == 3) {
    nthGenerator = "rd";
  } else {
    nthGenerator = "th";
  }

  const date = `${todaysDate}${nthGenerator}, ${month}, ${current.getFullYear()}`;
  let dataAddition = (e) => {
    if (buttonValue === "Add") {
      action.addTask(task);
      // setTaskArray([...taskArray, task]);
      setTask("");
    } else if (buttonValue === "Update") {
      let temp = taskArray;
      temp[indexedit] = task;
      action.updateTask(temp);
      // setTaskArray(temp);
      setTask("");
      setButtonValue("Add");
    }
  };
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="headingMenu"
              fill="none"
              viewBox="0 0 24 24"
              stroke={sidebarIconColor}
              strokeWidth="1"
              width={sidebarIconWidth}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <p className="heading">My Day</p>
            <p className="headingDots">...</p>
          </div>
          <p className="headingDate">
            {today} {date}
          </p>
        </div>
        <div className="inputForm">
          {/* <div className="3radio"></div> */}
          <CircleSvg />
          <input
            type="text"
            value={task}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dataAddition(e);
              }
            }}
            className="formInput"
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
          <button
            className="formButton"
            value={buttonValue}
            onClick={dataAddition}
          >
            {buttonValue}
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
              {storeTask.map((data, index) => {
                return (
                  <tr className="circleHover">
                    <td
                      onClick={() => {
                        let completeArray = taskArray.splice(index, 1);
                        console.log(completeArray);
                        setTaskArray([...taskArray]);
                        setCompletedArray([...completedArray, completeArray]);
                      }}
                    >
                      <CircleSvg />
                    </td>
                    <td
                      style={{
                        width: "100%",
                      }}
                      onClick={() => {
                        let completeArray = taskArray.splice(index, 1);
                        console.log(completeArray);
                        setTaskArray([...taskArray]);
                        setCompletedArray([...completedArray, completeArray]);
                      }}
                    >
                      {data}
                    </td>
                    <td
                      onClick={() => {
                        setButtonValue("Update");
                        setTask(data);
                        setIndexedit(index);
                      }}
                    >
                      <PencilSvg
                        stroke={pendingTaskActionColor}
                        width={sidebarIconWidth}
                      />
                    </td>
                    <td
                      onClick={() => {
                        taskArray.splice(index, 1);
                        setTaskArray([...taskArray]);
                      }}
                    >
                      <BinSvg
                        stroke={pendingTaskActionColor}
                        width={sidebarIconWidth}
                      />
                    </td>
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
              marginTop: "60px",
            }}
          >
            Completed
          </p>
          <table className="completed">
            <tbody>
              {completedArray.map((data, index) => {
                return (
                  <tr
                    className="circleHover"
                    onClick={() => {
                      let completeArray = completedArray.splice(index, 1);
                      setCompletedArray([...completedArray]);
                      setTaskArray([...taskArray, completeArray]);
                    }}
                  >
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
