import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const ExpirationDateInputBox = styled.div`
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
  display: flex;

  margin: 5px 0;

  border-radius: 10px;

  & > input:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  color: ${COLOR.RED};
`;
