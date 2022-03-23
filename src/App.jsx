import menu from "./assets/menu.svg";
import settings from "./assets/settings.svg";
import question from "./assets/question.svg";
import notification from "./assets/notifications.svg";

import "./App.css";

function App() {
  return (
    <div className="todoApp">
      <nav className="navbar">
        <div className="navLeft">
          <img src={menu} className="navIcon navMenu" />
          <h1 className="appName">To Do</h1>
        </div>
        <div className="navMiddle">
          <input type="search" className="navSearch" />
        </div>
        <div className="navRight">
          <img src={settings} className="navIcon navSettings" />
          <img src={question} className="navIcon navQuestion" />
          <img src={notification} className="navIcon navNotification" />
          <div className="userProfile">
            <p>MS</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
