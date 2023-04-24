import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const OwnerNameInputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  span {
    font-size: 13px;
  }
`;

export const InputContainer = styled.div`
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  color: ${COLOR.RED};
`;
