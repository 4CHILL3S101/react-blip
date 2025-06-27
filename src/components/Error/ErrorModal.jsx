import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
import Lottie from "lottie-react";
import ErrorIcon from "../../assets/error_animation.json";

export function ErrorModal({
  open = false,
  tl = "Something went wrong while processing your request",
  br = "0px",
  icon = (
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
  ),
  onClose = () => {},
  bt = "Close",
}) {
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div className="error-backdrop" onClick={onClose}>
      <div
        className="error-content"
        style={{ borderRadius: br }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="error-icon">{icon}</div>
        <div className="error-label">{tl}</div>
        <button className="error-button" onClick={onClose}>
          {bt}
        </button>
      </div>
    </div>,
    document.body
  );
}
