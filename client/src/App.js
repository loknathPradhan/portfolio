import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import './App.css';
import Home from "./pages/Home"
import { AuthProvider } from "./components/Auth";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AuthProvider><Login /></AuthProvider>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<AuthProvider><Home /></AuthProvider>}/>
        </Routes>
      </Router>
      {/* <Home /> */}

    </>
  );
}

export default App;
