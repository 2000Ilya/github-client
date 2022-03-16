import React from "react";

import styles from "./Button.module.scss";

type ButtonProps = {
  onClick: (e: React.MouseEvent) => void;
  children: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  return (
    <button
      className={`${styles.button} flex-align-center`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
