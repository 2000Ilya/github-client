import React from "react";
import "./Input.css";

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default React.memo(Input);
