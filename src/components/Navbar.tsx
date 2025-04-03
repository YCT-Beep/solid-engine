import { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                EduPro
              </span>
            </Link>
            <div className="flex items-center space-x-2 ml-12">
              <Link
                to="/courses"
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Courses
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-indigo-600 px-4 py-2 rounded-md hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {storedUser ? (
              <ProfileIcon user={userData} onLogout={handleLogout} />
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-gray-700 px-4 py-2 border-solid border-indigo-600 border-[1px] rounded-md hover:bg-indigo-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="text-white bg-indigo-600 px-4 py-2 rounded-md hover:bg-indigo-800"
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
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/courses"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-white bg-indigo-600 rounded-md"
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
