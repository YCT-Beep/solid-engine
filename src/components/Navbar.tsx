import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import ProfileIcon from "./ProfileIcon";
import { userType } from "../types";

export function Navbar() {
  const storedUser = sessionStorage.getItem("loggedInUser");
  const userData: userType = storedUser ? JSON.parse(storedUser) : null;
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "/";
  };

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-indigo-600" />
              <span className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold text-gray-900">
                EduPro
              </span>
            </Link>
            <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 ml-8 sm:ml-16">
              <Link
                to="/courses"
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors duration-200
                  ${
                    isActive("/courses")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
              >
                Courses
              </Link>
              <Link
                to="/about"
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors duration-200
                  ${
                    isActive("/about")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium transition-colors duration-200
                  ${
                    isActive("/contact")
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  }`}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
            {storedUser ? (
              <ProfileIcon user={userData} size={45} onLogout={handleLogout} />
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base border-solid border-indigo-600 border-[1px] rounded-md hover:bg-indigo-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-indigo-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base rounded-md hover:bg-indigo-800"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-semibold text-gray-900">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-indigo-600 p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="px-4 pt-4 pb-6">
              {storedUser ? (
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="flex items-center space-x-4">
                    <img
                      src={userData.avatarImage}
                      alt="Profile"
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {userData.name}
                      </h3>
                      <p className="text-sm text-gray-500">{userData.email}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 pb-6 border-b border-gray-200 space-y-2">
                  <Link
                    to="/login"
                    className="block w-full px-4 py-2.5 text-center text-gray-700 border border-indigo-600 rounded-md hover:bg-indigo-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block w-full px-4 py-2.5 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}

              <div className="space-y-2">
                <Link
                  to="/courses"
                  className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200
                    ${
                      isActive("/courses")
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/about"
                  className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200
                    ${
                      isActive("/about")
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`block px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200
                    ${
                      isActive("/contact")
                        ? "text-indigo-600 bg-indigo-50"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              {storedUser && (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="mt-6 w-full px-4 py-2.5 text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition-colors duration-200"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
