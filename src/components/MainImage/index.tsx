import React from "react";

const MainImage = ({
  thumbnailURL,
  openImage,
}: {
  thumbnailURL: string | undefined;
  openImage: () => void;
}) => {
  return (
    <img
      className="h-full mobile:hidden"
      src={thumbnailURL}
      alt=""
      onClick={openImage}
      style={{ width: "450px", objectFit: "contain" }}
    />
  );
};

export default MainImage;
