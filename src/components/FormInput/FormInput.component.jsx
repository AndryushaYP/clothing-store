import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ onChange, label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} {...props} />
      {label && (
        <label className={`${props.value ? "shrink" : ""} form-input-label`}>{label}</label>
      )}
    </div>
  );
};

export default FormInput;
