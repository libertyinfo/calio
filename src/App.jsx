import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Noentries from "./components/Noentries";
import Login from "./components/Login";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noentries" element={<Noentries />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
