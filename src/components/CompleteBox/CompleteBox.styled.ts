import styled from 'styled-components';

import { COLOR } from '../../constants/card';

export const CompleteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 50px;
`;

export const ConfirmButton = styled.button`
  height: 60px;
  width: 80px;

  font-size: large;
  font-weight: 700;

  cursor: pointer;

  color: white;
  background-color: ${COLOR.TOSS_BLUE};
  border-radius: 8px;
`;
