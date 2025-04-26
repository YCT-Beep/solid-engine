import React, { useState, useRef, useEffect } from "react";
import { userType } from "../types";

interface Props {
  user: userType;
  size?: number;
  onLogout: () => void;
}

const ProfileIcon: React.FC<Props> = ({ user, size = 50, onLogout }) => {
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const iconStyle = {
    width: size,
    height: size,
    fontSize: size / 2.5,
  };

  return (
    <div className="relative inline-block">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center cursor-pointer 
            ${user.avatarImage ? "bg-cover bg-center" : ""} 
            border-2 border-indigo-600/20 hover:border-indigo-600 transition-colors duration-300
            shadow-sm hover:shadow-md`}
          style={{
            ...iconStyle,
            backgroundImage: user.avatarImage
              ? `url(${user.avatarImage})`
              : undefined,
          }}
        >
          {!user.avatarImage && user.name && user.name[0].toUpperCase()}
        </div>
        {isHovered && (
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
              bg-white rounded-lg shadow-lg p-4 min-w-[200px] z-10
              transition-all duration-300 ease-in-out
              border border-indigo-100
              opacity-100 visible flex flex-col items-center"
          >
            {user.name && (
              <p className="text-gray-800 font-medium text-center">
                {user.name}
              </p>
            )}
            {user.email && (
              <p className="text-gray-600 text-sm text-center">{user.email}</p>
            )}
            {!user.name && !user.email && (
              <p className="text-gray-600">No data available</p>
            )}
            <button
              className="mt-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium
                py-2 px-4 rounded-md transition-colors duration-300
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileIcon;
