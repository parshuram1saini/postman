import React from "react";
import "./style.css";

function Header(props) {
  return (
    <>
      <nav className="head-nav" style={props.style}>
        <img className="img" src="Postman.png" alt="postman"></img>
        <ul className=" head-ul">
          <li className="list">Home</li>
          <li className="list">Workspaces</li>
          <li className="list">ApiNetwork</li>
          <li className="list">Reports</li>
          <li className="list">Explore</li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
