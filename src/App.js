import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./layout/navbar/Navbar";

import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
