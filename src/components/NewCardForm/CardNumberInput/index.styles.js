import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../constants/style';

export const CardNumberInputWrapper = styled.div`
  margin-bottom: 10px;
  font-size: ${FONT_SIZE.LARGE};
`;

export const InputContainer = styled.div`
  display: flex;
  background-color: ${COLOR.INPUT.DEFAULT_BG};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  height: 2.8125rem;
  justify-content: space-around;

  input {
    width: 4.375rem;
    margin: 0 2px;
    font-size: inherit;
    position: relative;
  }

  span:not(:last-child)::after {
    content: '-';
    color: #04c09e;
  }
`;

export const InputLabel = styled.div`
  font-size: ${FONT_SIZE.SMALL};
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  letter-spacing: -0.085rem;
`;

export const InputAlert = styled.div`
  padding: 3px;
  font-size: ${FONT_SIZE.MINI};
  color: ${COLOR.CARD.RED};
`;
