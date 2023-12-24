import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header/>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createuser" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
