import React from "react";
import "./SignIn.styles.scss";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

const SignIn = () => {
  const [data, setData] = React.useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ [name]: value });
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          required
        />
        <CustomButton type="submit">SIGN IN</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
