import React from "react";

const SongBox = ({ song, artist }) => {
  return (
    <>
      <div className="songbox">
        Today's Song: {song} by {artist}
      </div>
    </>
  );
};

export default SongBox;
