import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const CardNumberInputBox = styled.div`
  position: relative;

  margin-bottom: 40px;
`;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  span {
    font-size: 15px;
  }
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: ${COLOR.RED};
`;
