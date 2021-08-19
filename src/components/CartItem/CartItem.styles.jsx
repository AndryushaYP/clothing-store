import styled, { css } from "styled-components";

const cartItemStyles = css`
  font-size: 16px;
`;

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

export const ImageContainer = styled.img`
  width: 30%;
  object-fit: cover;
`;

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

export const NameContainer = styled.span`
  ${cartItemStyles}
`;

export const PriceContainer = styled.span`
  ${cartItemStyles}
`;
