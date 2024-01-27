import React, { PropsWithChildren, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<IProps>) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors duration-1000 ease-in-out z-50 ${
        isOpen ? "visible bg-black/40" : "invisible"
      }`}
      onClick={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div
        className={`
        bg-white rounded-xl shadow p-6 transition-all duration-100 ease-in-out mobile:mx-6 w-[40%] min-w-[300px]
        ${isOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}
      `}
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute top-[-35px] right-[-8px] p-1 rounded-lg text-white"
          onClick={onClose}
          size={30}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
