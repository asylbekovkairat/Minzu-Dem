import React from "react";
import "photoswipe/style.css";

const MainImage = ({ thumbnailURL }: { thumbnailURL: string | undefined }) => {
  return (
    <a href={thumbnailURL} target="_blank" rel="noreferrer">
      <img
        src={thumbnailURL}
        alt=""
        style={{ width: "450px", height: "500px", objectFit: "contain" }}
      />
    </a>
  );
};

export default MainImage;
