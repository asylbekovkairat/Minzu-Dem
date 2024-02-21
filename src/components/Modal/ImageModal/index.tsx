import React from "react";
import { RxCross2 } from "react-icons/rx";

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
        shadow transition-all duration-100 ease-in-out min-w-[300px]
        ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}
        onClick={(event) => event.stopPropagation()}
      >
        <section className="group absolute bottom-0 w-full h-24 flex justify-center mobile:h-14">
          <div className="w-min rounded-lg mb-4 text-white p-1 self-start bg-black/40 opacity-25 group-hover:opacity-100 transition-all cursor-pointer mobile:opacity-100">
            <RxCross2 onClick={onClose} size={30} />
          </div>
        </section>
        <img
          className="h-[695px] mobile:h-auto"
          src={thumbnailURL}
          alt={thumbnailURL}
        />
      </div>
    </div>
  );
};

export default ImageModal;
