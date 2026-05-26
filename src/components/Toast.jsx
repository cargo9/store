import React, { useEffect } from "react";
import { ToastContainer, ToastMessage } from "./Toast.styled";

export const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <ToastContainer>
      <ToastMessage>✓ {message}</ToastMessage>
    </ToastContainer>
  );
};
