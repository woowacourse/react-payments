import styled from 'styled-components';

import { COLOR } from '../../constants/card';

export const FormSubmitBox = styled.div<Record<'isFilledForm', boolean>>`
  display: flex;
  justify-content: end;

  width: 100%;

  visibility: ${props => (props.isFilledForm ? 'visible' : 'hidden')};
`;

export const FormSubmitButton = styled.button`
  position: relative;

  height: 60px;
  width: 80px;

  font-size: large;
  font-weight: 700;

  cursor: pointer;

  color: white;
  background-color: ${COLOR.TOSS_BLUE};
  border-radius: 8px;

  &:focus {
    outline: solid ${COLOR.BLUE};
  }
`;
