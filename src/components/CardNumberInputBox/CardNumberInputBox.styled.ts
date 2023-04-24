import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const CardNumberInputBox = styled.div`
  position: relative;

  margin-bottom: 40px;
`;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 15px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;

  margin: 5px 0;

  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  position: absolute;

  color: ${COLOR.RED};
`;
