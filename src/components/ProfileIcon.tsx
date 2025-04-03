import React, { useState } from "react";
import { userType } from "../types";

interface Props {
  user: userType;
  size?: number;
  onLogout: () => void;
}

const ProfileIcon: React.FC<Props> = ({ user, size = 50, onLogout }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
          className={`rounded-full bg-gray-300 text-white flex items-center justify-center cursor-pointer ${
            user.avatarImage ? "bg-cover bg-center" : ""
          } border-[1px] border-indigo-600`}
          style={{
            ...iconStyle,
            backgroundImage: user.avatarImage ? `url(${user.avatarImage})` : undefined,
          }}
        >
          {!user.avatarImage && user.name && user.name[0].toUpperCase()}
        </div>
        {isHovered && (
          <div
            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2
 bg-white rounded-md shadow-lg p-4 min-w-[200px] z-10
 transition-opacity duration-300 ease-in-out
 opacity-100 visible flex flex-col items-center"
          >
            {user.name && (
              <p className="text-gray-800 text-center">{user.name}</p>
            )}
            {user.email && (
              <p className="text-gray-800 text-center">{user.email}</p>
            )}
            {!user.name && !user.email && (
              <p className="text-gray-600">No data available</p>
            )}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2"
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
