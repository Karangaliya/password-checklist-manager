import React from "react";

function CustomButton({
  type = "submit",
  buttonTitle,
  backgroundColor,
  textColor,
  handleRedirect,
  icon,
  iconForward = false,
  style,
  isLoading = false,
  isDisabled = false,
}) {
  return (
    <button
      type={type}
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
        padding: "12px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
        ...style,
        cursor: isLoading || isDisabled ? "not-allowed" : "pointer",
        opacity: isLoading || isDisabled ? 0.5 : 1,
      }}
      onClick={handleRedirect}
      disabled={isLoading || isDisabled}
    >
      {isLoading && (
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      {iconForward && icon} {buttonTitle} {!iconForward && icon}
    </button>
  );
}

export default CustomButton;
