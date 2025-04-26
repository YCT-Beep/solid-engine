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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-10 w-10 text-indigo-600" />
              <span className="ml-3 text-2xl font-bold text-gray-900">
                EduPro
              </span>
            </Link>
            <div className="flex items-center space-x-4 ml-16">
              <Link
                to="/courses"
                className={`px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200
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
                className={`px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200
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
                className={`px-4 py-2.5 rounded-md text-base font-medium transition-colors duration-200
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

          <div className="hidden md:flex items-center space-x-6">
            {storedUser ? (
              <ProfileIcon user={userData} size={45} onLogout={handleLogout} />
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 px-5 py-2.5 text-base border-solid border-indigo-600 border-[1px] rounded-md hover:bg-indigo-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-indigo-600 px-5 py-2.5 text-base rounded-md hover:bg-indigo-800"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-4 pt-3 pb-4 space-y-2 sm:px-4">
            <Link
              to="/courses"
              className="block px-4 py-2.5 text-base text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="block px-4 py-2.5 text-base text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-4 py-2.5 text-base text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-4 py-2.5 text-base text-white bg-indigo-600 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
