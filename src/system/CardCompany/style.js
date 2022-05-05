import styled from 'styled-components';

export const CardCompanyStyled = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;
  height: 105px;
`;

export const CardCompanyNameStyled = styled.p(({ selected }) => `
  margin: 10px 0;
  color: var(${(selected ? '--card-company-text-color' : '--selected-card-company-text-color')});
  font-size: 12px;
  letter-spacing: -0.085rem;
`);
