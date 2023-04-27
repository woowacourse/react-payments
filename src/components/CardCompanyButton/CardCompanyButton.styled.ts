import styled from 'styled-components';

export const CardCompanyButton = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }

  p {
    letter-spacing: -0.085em;
    text-align: center;
  }
`;
