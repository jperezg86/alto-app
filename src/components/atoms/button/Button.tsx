import React from "react";

type ButtonProps = {
  children: string | JSX.Element | JSX.Element[];
  onClick: (evt: any) => void;
  type: "primary" | "ligth" | "secondary" | "dark";
  disabled?: boolean;
  className?: string;
};

const Button = ({
  children,
  onClick,
  type = "primary",
  disabled,
  className,
}: ButtonProps) => {
  const theClassName = `bg-${type} ${className} p-3 text-light`;
  return (
    <button className={theClassName} 
      onClick={onClick} 
      disabled={disabled} data-testid="custom-button">
      {children}
    </button>
  );
};

export default Button;
