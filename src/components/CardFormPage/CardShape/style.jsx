import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
`;

export { CardContainer, GridContainer };
