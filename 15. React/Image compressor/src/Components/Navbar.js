import React from 'react'

/*Import the Font Awesome Icons that are used in this file*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

/*Importing NavBar Component to create a Beautiful Navbar and Card Component from Bootstrap */
import { Navbar, Card } from "react-bootstrap";

function Navbars() {
    return (
        <div>
    <Navbar
        className="navbar justify-content-center"
        bg="light"
        variant="light"
      >
        <Navbar.Brand className="navbar-content" href="/">
          <FontAwesomeIcon
            className="social-icons changeOn"
            icon={faImage}
            size={1}
          />{" "}
          Image Compressor
        </Navbar.Brand>
      </Navbar> 
        </div>
    )
}

export default Navbars
