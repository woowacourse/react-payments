import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const ExpirationDateInputBox = styled.div``;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  display: flex;

  margin: 4px 0;

  & > input:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ErrorMessage = styled.p`
  color: ${COLOR.RED};
`;
