import React, { useState, useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("email");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold underline underline-offset-4"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              CLOUD NOTE
            </Link>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {menuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <NavLink to="/home" className={navLinkStyle}>
                Home
              </NavLink>
              {!isLoggedIn && (
                <NavLink to="/login" className={navLinkStyle}>
                  Login
                </NavLink>
              )}
              <NavLink to="/account" className={navLinkStyle}>
                Account
              </NavLink>
              {isLoggedIn && (
                <>
                  <NavLink to="/project" className={navLinkStyle}>
                    Project
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:underline"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2">
            <NavLink
              to="/home"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            )}
            <NavLink
              to="/account"
              className={navLinkStyle}
              onClick={() => setMenuOpen(false)}
            >
              Account
            </NavLink>
            {isLoggedIn && (
              <>
                <NavLink
                  to="/project"
                  className={navLinkStyle}
                  onClick={() => setMenuOpen(false)}
                >
                  Project
                </NavLink>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="text-red-600 hover:underline"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </nav>

      <main className="">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
