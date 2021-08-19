import React from "react";
import { GroupContainer, FormInputContainer, FormInputLabelContainer } from "./FormInput.styles";

const FormInput = ({ onChange, label, ...props }) => {
  return (
    <GroupContainer>
      <FormInputContainer onChange={onChange} value={props.value} {...props} />
      {label ? (
        <FormInputLabelContainer className={props.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabelContainer>
      ) : null}
    </GroupContainer>
  );
};

export default FormInput;
