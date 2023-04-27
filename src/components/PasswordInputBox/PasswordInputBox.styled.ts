import styled from 'styled-components';
import { COLOR } from '../../constants/cardInfo';
import { Ellipse } from '../Card/Card.styled';

export const PasswordInputBox = styled.div``;

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

export const RestPasswordContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
`;

export const RestPassword = styled(Ellipse)`
  background: black;
`;

export const ErrorMessage = styled.p`
  color: ${COLOR.RED};
`;
