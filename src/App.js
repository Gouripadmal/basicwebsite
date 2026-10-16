
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/register" replace />}
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
