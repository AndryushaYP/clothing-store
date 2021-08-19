import styled from "styled-components";

export const CartDropdownContainer = styled.section`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 80px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.ul`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
