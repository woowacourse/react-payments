import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const OwnerNameInputBox = styled.div``;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 16px;
  }
`;

export const InputContainer = styled.div`
  margin: 4px 0;
`;

export const ErrorMessage = styled.p`
  color: ${COLOR.RED};
`;
