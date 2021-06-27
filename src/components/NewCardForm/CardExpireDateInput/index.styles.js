import styled from 'styled-components';
import { COLOR, FONT_SIZE } from '../../../constants/style';

export const CardExpireDateInputWrapper = styled.div`
  margin-bottom: 10px;
  font-size: ${FONT_SIZE.LARGE};

  .input-label {
    font-size: ${FONT_SIZE.SMALL};
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: -0.085rem;
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

export const InputContainer = styled.div`
  display: flex;
  background-color: ${COLOR.INPUT.DEFAULT_BG};
  border-radius: 7px;
  justify-content: center;
  align-items: center;
  width: 40%;

  input {
    width: 4.225rem;
    margin: 0 2px;
    font-size: inherit;
  }

  .gray {
    color: ${COLOR.MAIN.DEFAULT};
  }
`;

export const InputSeperator = styled.span`
  display: inline-block;
  width: 0.8rem;
  height: 45px;
  line-height: 41px;
  text-align: center;
  color: ${COLOR.MAIN.MINT};
`;

export const ExpireDateContainer = styled.div`
  input[name='month'] {
    text-align: right;
  }

  input[name='year'] {
    text-align: left;
  }
`;
