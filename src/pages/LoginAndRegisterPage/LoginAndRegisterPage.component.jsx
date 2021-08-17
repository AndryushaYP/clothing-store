import React from "react";
import "./LoginAndRegisterPage.styles.scss";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/SignUp/SignUp.component";

const LoginAndRegisterPage = () => {
  return (
    <section className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </section>
  );
};

export default LoginAndRegisterPage;
