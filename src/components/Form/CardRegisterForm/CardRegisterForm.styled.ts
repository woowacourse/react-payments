import styled from 'styled-components';
import { SubmitButton } from '../../styles';

export const CardRegisterForm = styled.form`
  & > div:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const CardRegisterButton = styled(SubmitButton)``;
