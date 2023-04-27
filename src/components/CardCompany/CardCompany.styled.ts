import styled from 'styled-components';

export const CardCompany = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 80px;

  cursor: pointer;

  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  p {
    letter-spacing: -0.085em;
    text-align: center;
  }
`;
