import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const SecurityCodeInputBox = styled.div``;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 4px 0;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: ${COLOR.RED};
`;
