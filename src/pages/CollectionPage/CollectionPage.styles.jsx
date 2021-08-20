import styled from "styled-components";

export const CollectionPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const ItemsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;

  & > div {
    margin-bottom: 30px;
  }
`;
