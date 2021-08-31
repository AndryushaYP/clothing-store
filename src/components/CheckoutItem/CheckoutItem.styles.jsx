import styled, { css } from "styled-components";

const checkoutItemStyles = css`
  width: 23%;
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const NameContainer = styled.span`
  ${checkoutItemStyles}
`;

export const QuantityContainer = styled.span`
  display: flex;
  ${checkoutItemStyles}
`;

export const PriceContainer = styled.span`
  ${checkoutItemStyles}
`;

export const ValueContainer = styled.span`
  padding: 0 7px;
`;

export const ArrowContainer = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #ffffff;
  font-size: 16px;
`;

export const RemoveButtonContainer = styled.button`
  padding: 0;
  border: none;
  cursor: pointer;
  background-color: #ffffff;
  font-size: 16px;
`;
