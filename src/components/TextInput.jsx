import React from "react";

const TextInput = ({ label, inputProps, onChange, value }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} />
    </div>
  );
};

export default TextInput;
