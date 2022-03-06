import React from "react";
import "./Input.css";

type InputProps = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      className="search-input"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default React.memo(Input);
