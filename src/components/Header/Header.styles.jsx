import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionsContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  padding-left: 0;
`;

export const OptionsContainer = styled.nav`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const OptionLink = styled(Link)`
  ${OptionsContainerStyles}
`;