import styled from 'styled-components';

import { COLOR } from '../../constants/cardInfo';

export const CardInfoSubmitButton = styled.button`
  position: absolute;
  bottom: 0px;
  right: 0px;

  height: 40px;
  width: 50px;

  font-size: large;
  font-weight: 700;

  cursor: pointer;

  &:focus {
    outline: solid ${COLOR.BLUE};
  }
`;
