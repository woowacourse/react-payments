import styled from 'styled-components';

import { SubmitButton } from '../../styles';

export const NicknameForm = styled.form`
  margin-top: 120px;
`;

export const NicknameInput = styled.input`
  width: 100%;
  border: none;
  padding-bottom: 8px;
  border-bottom: 2px solid #383838;

  font-size: 22px;
  font-weight: 500;

  color: #383838;

  text-align: center;
`;

export const NicknameSubmitButton = styled(SubmitButton)``;
