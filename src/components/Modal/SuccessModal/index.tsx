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
        <p className="text-center">
          I got your message. I'll be in touch shortly.
        </p>
      ) : (
        <p className="text-center">
          Something went wrong. Please, Try again
        </p>
      )}
    </Modal>
  );
};

export default SuccessModal;
