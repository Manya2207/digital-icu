import React from "react";

const inputStyles = {
  width: "fit-content",
  padding: "0.5rem ",
  border: "1px solid #ccc",
  borderRadius: "4px",
  outline: "none",
  backgroundColor: "#464646",
  color: "#fff",
  border: "none",
  marginRight: "16px",
};

const CustomInput = ({ label, name, type, value, options, onChange }) => {
  return (
    <div>
      <label className="block text-gray-200 text-sm font-bold" htmlFor={name}>
        {label}
      </label>
      {type === "text" && (
        <input
          style={inputStyles}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Enter ${label}`}
        />
      )}
      {type === "dropdown" && (
        <select
          style={inputStyles}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled>
            Select {label}
          </option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CustomInput;
