import React from "react";
import NavMenu from "./NavMenu";
import SongBox from "./SongBox";

const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <NavMenu />
        <SongBox artist="Morrissey" song="Suedehead" />
      </div>
    </>
  );
};

export default SideBar;
