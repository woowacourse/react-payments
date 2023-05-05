import styled from 'styled-components';

export const CompanyLogoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 12px 24px;
`;
