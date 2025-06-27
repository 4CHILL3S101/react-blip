import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./WarningModal.css";
import Lottie from "lottie-react";
import WarningIcon from "../../assets/warning_animation.json";

export function WarningModal({
  open = false,
  tl = "Your action was completed successfully.",
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
      animationData={WarningIcon}
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
    <div className="warning-backdrop" onClick={onClose}>
      <div
        className="warning-content"
        style={{ borderRadius: br }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="warning-icon">{icon || defaultIcon}</div>
        <div className="warning-label">{tl}</div>
        <button className="warning-button" onClick={onClose}>
          {bt}
        </button>
      </div>
    </div>,
    document.body
  );
}
