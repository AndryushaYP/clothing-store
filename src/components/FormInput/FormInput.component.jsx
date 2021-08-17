import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ onChange, label, ...props }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} value={props.value} {...props} />
      {label ? (
        <label className={`${props.value.length ? "shrink" : ""} form-input-label`}>{label}</label>
      ) : null}
    </div>
  );
};

export default FormInput;
