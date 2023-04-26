import styled from 'styled-components';

import { COLOR } from '../../constants/cardInfo';

export const CardInfoSubmitButtonContainer = styled.div`
  display: flex;
  justify-content: end;

  height: 40px;
`;

export const CardInfoSubmitButton = styled.button`
  position: relative;

  width: 50px;

  font-size: large;
  font-weight: 700;

  cursor: pointer;

  &:focus {
    outline: solid ${COLOR.BLUE};
  }
`;
