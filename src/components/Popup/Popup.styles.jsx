import styled from "styled-components";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

export const PopupContainer = styled.div`
  visibility: visible;
  opacity: 1;
  transition: visibility 0.3s, opacity 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const PopupWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  max-height: 80vh;
  background: #ffffff;
  position: relative;
  @media screen and (max-width: 1024px) {
    width: 80vw;
  }
`;
export const ImageContainer = styled.img`
  width: 50%;
  object-fit: cover;
`;

export const ItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 50%;
  padding: 15px;
`;

export const TitleContainer = styled.h2`
  margin: 15px 0;
`;
export const DescriptionContainer = styled.p`
  margin: 0;
`;

export const CloseButton = styled(CloseIcon)`
  position: absolute;
  cursor: pointer;
  top: -40px;
  right: -40px;
`;
