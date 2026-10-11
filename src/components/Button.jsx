
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  to = "/contact",
  variant = "primary",
  className = "",
  icon = true,
  onClick,
  type = "button",
  disabled = false,
}) {
  const classes = `ui-button ui-button--${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {icon && <ArrowUpRight size={17} />}
    </>
  );

  if (onClick || type === "submit") {
    return (
      <button
        className={classes}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {content}
      </button>
    );
  }

  return (
    <Link className={classes} to={to}>
      {content}
    </Link>
  );
}
