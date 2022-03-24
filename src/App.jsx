import "./App.css";
import MainBody from "./components/mainBody/MainBody";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="todoApp">
      <Navbar />
      <MainBody />
    </div>
  );
}

export default App;
