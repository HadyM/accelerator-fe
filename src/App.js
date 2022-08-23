import { Routes, Route } from "react-router-dom";

import Navbar from "./layout/navbar/Navbar";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
