import logo from "./logo.svg";
import "./App.css";
import UserComponent from "./Pages/HomePage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<UserComponent />} />
      </Routes>
    </div>
  );
}

export default App;
