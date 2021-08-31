import React, { useState, useEffect } from "react";
import "../styles/Nav.css";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <img
        className='nav_logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Netflix_logo_%282%29.svg/399px-Netflix_logo_%282%29.svg.png'
        alt='Netflix Logo'
      />
      <img
        className='nav_avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix Avatar'
      />
    </div>
  );
};

export default Navbar;
