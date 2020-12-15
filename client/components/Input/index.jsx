import React from "react";

const Input = ({ type, label, value, onChange }) => {
  return (
    <div className="inputContainer">
      <p>{label}</p>
      <div className="input">
        {type === "textarea" ? (
          <textarea
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
