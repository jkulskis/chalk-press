import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import chalkPressLogo from'../../images/chalk-press-logo.webp';

const Navbar = () => {
  return (
    <>
    <div id="headerImage"></div>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/shop" activeStyle>
            Shop
          </NavLink>
          <NavLink to="/press" activeStyle>
            Press
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/video" activeStyle>
            Video
          </NavLink>
          <NavLink to="/friends" activeStyle>
            Friends
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
