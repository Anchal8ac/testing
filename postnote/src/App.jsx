import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import Project from "./pages/Project";
import AccountPage from "./pages/AccountPage";
import PrivateRoute from "./pages/ProtectRoute"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route
            path="project"
            element={
              <PrivateRoute>
                <Project />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
