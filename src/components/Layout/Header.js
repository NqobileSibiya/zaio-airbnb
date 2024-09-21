import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import Login from "../Login"; // Import the Login component
import "./Header.css";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector(state => state.userLogin);
  const userInfo = userLogin?.userInfo;

  const toggleLoginModal = () => setShowLogin(!showLogin);

  const handleBecomeHost = () => {
    navigate('/become-a-host'); // Navigate to the "Become a Host" page
  };

  return (
    <div className="header">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyUCCwAIvYkQ1d2d3ZyZ7yy7epISsBs_6VA&s"
        className="header_logo"
        alt="logo"
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <p onClick={handleBecomeHost}>Become a host</p> {/* Navigate on click */}
        <LanguageIcon />
        <div className="dropdown">
          <ExpandMoreIcon />
          <div className="dropdown-content">
            {userInfo ? (
              <>
                <span>Account</span>
                <span>Log out</span>
              </>
            ) : (
              <>
                <span>Sign Up</span>
                <span onClick={toggleLoginModal}>Log in</span>
              </>
            )}
            <span>Help</span>
          </div>
        </div>
        <Avatar />
      </div>

      {showLogin && <Login onClose={toggleLoginModal} />} {/* Show the Login component */}
    </div>
  );
};

export default Header;

  