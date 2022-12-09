import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const NavLink = ({to, id, children}) => (
  <Link class="navlink" to={to} id={id}>{children}</Link>
);

const NavMenu = () => {
  return (
    <>
      <div class="navbox">
        <NavLink to="/" id="navHome">
          Home
        </NavLink>
        <br />
        <NavLink to="/about" id="navAbout">
          About
        </NavLink>
        <br />
        <NavLink to="/shop" id="navShop">
          Shop
        </NavLink>
        <br />
        <NavLink to="/press" id="navPress">
          Press
        </NavLink>
        <br />
        <NavLink to="/archive" id="navArchive">
          Archive
        </NavLink>
        <br />
        <NavLink to="/friends" id="navFriends">
          Friends
        </NavLink>
      </div>
    </>
  );
};

export default NavMenu;
