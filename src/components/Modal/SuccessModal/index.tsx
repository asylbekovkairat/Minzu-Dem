import React from "react";
import Modal from "..";

const SuccessModal = ({
  isOpen,
  onClose,
  isSuccess,
}: {
  isOpen: boolean;
  isSuccess: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isSuccess ? (
        <div className="">
          <svg
            aria-hidden="true"
            focusable="false"
            className="icon icon-success w-6 absolute left-[129px] top-[24px]"
            viewBox="0 0 13 13"
          >
            <path
              d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
              fill="#428445"
              stroke="white"
              stroke-width="0.7"
            ></path>
            <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white"></path>
            <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white"></path>
          </svg>
          <p className="text-center">
            Thanks for contacting us.
            <br /> We'll get back to you as soon as possible
          </p>
        </div>
      ) : (
        <p className="text-center">Something went wrong. Please, Try again</p>
      )}
    </Modal>
  );
};

export default SuccessModal;
