import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

function CustomButton({
  type = "submit",
  buttonTitle,
  backgroundColor,
  textColor,
  handleRedirect,
  icon,
  iconForward = false,
  style,
  hoverColor,
  isLoading = false,
  isDisabled = false,
  ...props
}) {
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  return (
    <button
      type={type}
      {...props}
      style={{
        background: backgroundColor || "#6900ef",
        color: textColor || "#fff",
        border: "none",
        borderRadius: "22px",
        fontSize: "12px",
        lineHeight: 1,
        fontWeight: 600,
        letterSpacing: "0.68px",
        margin: "0px",
        padding: "12px 18px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        transition: "all 0.2s ease",
        transform: isPressed ? "scale(0.95)" : "scale(1)",
        boxShadow: isPressed
          ? "0 2px 6px rgba(0,0,0,0.3)"
          : "0 4px 10px rgba(0,0,0,0.2)",
        ...style,
        cursor: isLoading || isDisabled ? "not-allowed" : "pointer",
        opacity: isLoading || isDisabled ? 0.5 : 1,
      }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={(e) =>
        (e.target.style.background = hoverColor || "#7c3aed")
      }
      onMouseLeave={(e) =>
        (e.target.style.background = backgroundColor || "#6900ef")
      }
      onClick={handleRedirect}
      disabled={isLoading || isDisabled}
    >
      {isLoading && <CircularProgress size={20} color="inherit" />}
      {iconForward && icon} {buttonTitle} {!iconForward && icon}
    </button>
  );
}

export default CustomButton;
