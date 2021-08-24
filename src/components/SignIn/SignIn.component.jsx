import React from "react";
import {
  SignInContainer,
  TitleContainer,
  SubtitleContainer,
  ButtonsContainer,
  FormContainer,
} from "./SignIn.styles";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { useDispatch } from "react-redux";

const SignIn = () => {
  const [data, setData] = React.useState({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    dispatch(emailSignInStart({ email, password }));
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <SignInContainer>
      <TitleContainer className="title">I already have an account</TitleContainer>
      <SubtitleContainer>Sign in with your email and password</SubtitleContainer>
      <FormContainer action="" onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
          required
        />

        <ButtonsContainer>
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" isGoogleSignIn onClick={() => dispatch(googleSignInStart())}>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </ButtonsContainer>
      </FormContainer>
    </SignInContainer>
  );
};

export default SignIn;
