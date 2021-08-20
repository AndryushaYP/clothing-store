import React from "react";
import { LoginAndRegisterContainer } from "./LoginAndRegisterPage.styles";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

const LoginAndRegisterPage = () => {
  return (
    <LoginAndRegisterContainer>
      <SignIn />
      <SignUp />
    </LoginAndRegisterContainer>
  );
};

export default LoginAndRegisterPage;
