
import Logo from "../images/logo.png"
import "../css/navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

import {Link} from "react-router-dom"
import React, { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/Home"> Home </Link>
          <Link to="/Allmenu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/login"> <a>LogIn | SignUp</a> </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/Home"> Home </Link>
        <Link to="/Allmenu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/login"> <a>LogIn | SignIn</a> </Link>
        

        <button  onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;