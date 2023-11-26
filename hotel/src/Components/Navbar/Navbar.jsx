import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to={"/Home"}>Home</Link>
       <Link to={"/Rooms"}>Rooms</Link>
        <Link to={"/Dining"}>Dining</Link>
        <Link to={"/Activities"}>Activities</Link>
        <Link to={"/Contacts"}>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;