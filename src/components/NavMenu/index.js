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
        <NavLink to="/about" id="navAbout">
          About
        </NavLink>
        <NavLink to="/shop" id="navShop">
          Shop
        </NavLink>
        <NavLink to="/press" id="navPress">
          Press
        </NavLink>
        <NavLink to="/archive" id="navArchive">
          Archive
        </NavLink>
        <NavLink to="/friends" id="navFriends">
          Friends
        </NavLink>
      </div>
    </>
  );
};

export default NavMenu;
