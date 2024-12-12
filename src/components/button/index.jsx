import React from "react";
import "./style.css";

const Button = ({
  type = "button",
  className = "",
  disabled = false,
  onClick,
  children,
  variant = "primary",
  size = "md",
  ...rest
}) => {
  return (
    <button
      type={type}
      className={`btn ${className} btn-${variant} btn-size-${size}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
