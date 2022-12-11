import React from "react";
import SideBar from "./SideBar";

const ContentBox = ({ children }) => {
  return (
    <>
      <div class="cb">
        <SideBar />
        <div class="cbc">
          <div className="cbtext">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ContentBox;
