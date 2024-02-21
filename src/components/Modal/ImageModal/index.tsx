import React from "react";

const ImageModal = ({
  isOpen,
  onClose,
  thumbnailURL,
}: {
  isOpen: boolean;
  onClose: () => void;
  thumbnailURL: string | undefined;
}) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors duration-1000 ease-in-out z-50 ${
        isOpen ? "visible bg-black" : "invisible"
      }`}
      onClick={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div
        className={`
        shadow transition-all duration-100 ease-in-out mobile:mx-6 w-[40%] min-w-[300px]
        ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={thumbnailURL} alt={thumbnailURL} />
      </div>
    </div>
  );
};

export default ImageModal;
