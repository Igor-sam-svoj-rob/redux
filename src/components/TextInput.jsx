import React from "react";

const TextInput = ({ label, inputProps, onChange, value }) => {
  return (
    <>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} />
    </>
  );
};

export default TextInput;
