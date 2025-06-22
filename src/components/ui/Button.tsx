import React from "react";
import Link from "next/link";
import BtnLoader from "./BtnLoader";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size: "md" | "sm";
  theme?: "primary" | "secondary" | "tetiary";
  customTheme?: string;
  children: React.ReactNode;
  // Redirect props
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: string;
  // Additional button props
  onClick?: () => void;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  size = "sm",
  theme = "primary",
  customTheme,
  children,
  href,
  target,
  download,
  className,
  disabled,
  onClick,
  loading,
}) => {
  const themeMap = {
    primary: `text-white ${
      disabled
        ? "bg-primary-disabled dark:bg-secondary-disabled"
        : "bg-primary dark:bg-secondary"
    }`,
    secondary: `text-primary bg-white`,
    tetiary: `text-primary border border-primary `,
  };

  const sizeMap = {
    md: "h-10 text-sm  py-3  font-medium px-[42px] sm:h-14 sm:text-lg min-w-[144px] sm:px-[54px]",
    sm: "min-h-[35px] text-sm py-2 font-medium px-[34px] sm:h14 sm:text-lg min-w-[119px] sm:px-[54px]",
  };

  const sizeClasses = sizeMap[size];
  const finalClass =
    `whitespace-nowrap block text-center rounded-[24px] no-underline ${
      disabled
        ? " cursor-not-allowed"
        : "cursor-pointer hover:scale-102 duration-150 active:scale-100"
    }   ${
      !customTheme && themeMap[theme]
    } ${sizeClasses} ${customTheme} ${className || ""}`.trim();

  // If href is provided, render as a link
  if (href) {
    // Check if it's an external link
    const isExternal = href.startsWith("http") || href.startsWith("//");

    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          download={download}
          className={finalClass}
        >
          {children}
        </a>
      );
    }

    // Use Next.js Link for internal navigation
    return (
      <Link
        href={href}
        target={target}
        download={download}
        className={finalClass}
      >
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      // data-aos="flip-up"
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={finalClass}
    >
      {loading ? <BtnLoader /> : children}
    </button>
  );
};

export default Button;
