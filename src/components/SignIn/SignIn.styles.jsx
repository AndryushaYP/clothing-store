import styled from "styled-components";

export const SignInContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 25%;
  @media screen and (max-width: 800px) {
    width: 90%;
  }
`;

export const TitleContainer = styled.h2`
  margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const FormContainer = styled.form``;

export const SubtitleContainer = styled.span``;
