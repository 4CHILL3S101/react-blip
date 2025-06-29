import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./SuccessModal.css";
import Lottie from "lottie-react";
import SuccessIcon from "../../assets/success_animation.json";

export function SuccessModal({
  open,
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
      animationData={SuccessIcon}
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
    <div className="dnaliwuhaiuhwdi-backdrop" onClick={onClose}>
      <div
        className="success-dwo87aw8dbuawdyuabwduya"
        style={{ borderRadius: br }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="success-dnauawawdgawudbawydv">
          {React.isValidElement(icon) ? icon : defaultIcon}
        </div>

        <div className="success-dnawinawd98awd9abinwdoa98wdg">{tl}</div>
        <button className="success-dnwoauwho98" onClick={onClose}>
          {bt}
        </button>
      </div>
    </div>,
    document.body
  );
}
