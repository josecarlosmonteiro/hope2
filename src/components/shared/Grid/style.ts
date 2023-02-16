import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  gap: 8px;
  grid-template-columns: 16rem auto 20rem;

  & > * {
    border-radius: 8px;
  }
`;

export const GridItem = styled.div`
  background-color: #00000008;
  padding: 1rem;
`;

export const DataItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: #00000005;
  border-bottom: 1px solid silver;
  transition: 250ms;

  &:hover {
    background-color: #00000010;
  }
`;
