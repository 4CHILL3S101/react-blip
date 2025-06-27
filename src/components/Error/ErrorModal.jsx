import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Lottie from "lottie-react";
import ErrorIcon from "../../assets/error_animation.json";

export function ErrorModal({
  open,
  tl = "Something went wrong while processing your request",
  br = "0px",
  icon,
  onClose = () => {},
  bt = "Close",
}) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  const defaultIcon = (
    <Lottie
      animationData={ErrorIcon}
      style={{
        width: "100px",
        height: "100px",
        alignSelf: "center",
        justifySelf: "center",
      }}
      loop={false}
    />
  );

  return ReactDOM.createPortal(
    <div className="error-backdrop" onClick={onClose}>
      <div
        className="error-content"
        style={{ borderRadius: br }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="error-icon">
          {React.isValidElement(icon) ? icon : defaultIcon}
        </div>
        <div className="error-label">{tl}</div>
        <button className="error-button" onClick={onClose}>
          {bt}
        </button>
      </div>
    </div>,
    document.body
  );
}
