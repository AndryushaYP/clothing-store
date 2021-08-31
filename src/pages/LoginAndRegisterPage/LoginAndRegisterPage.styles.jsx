import styled from "styled-components";

export const LoginAndRegisterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
