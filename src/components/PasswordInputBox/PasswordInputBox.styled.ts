import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';

export const PasswordInputBox = styled.div`
  position: relative;
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
  display: inline-block;
  border-radius: 10px;

  & > input:not(:last-child) {
    margin-right: 8px;
  }
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: ${COLOR.RED};
`;
