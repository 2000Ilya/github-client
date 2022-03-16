import React from "react";

import styles from "./Input.module.scss";

type InputProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className={styles["search-input"]}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default React.memo(Input);
