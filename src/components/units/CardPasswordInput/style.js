import styled from 'styled-components/macro';
import { DefaultInputWrapper, DefaultInput } from '../../shared/RegisterInputWrapper/style';

const InputWrapper = styled(DefaultInputWrapper)`
  width: 43px;
  &: first-child {
    margin-right: 7px;
  }
`;

const PasswordInput = styled(DefaultInput)`
  width: 20px;
  text-align: center;
  font: small-caption;
  font-size: 24px;
  letter-spacing: 2px;
`;

const PasswordMark = styled.div`
  width: 43px;
  height: auto;
  margin-left: 7px;
  display: flex;
  justify-content: center;
`;

export { PasswordInput, InputWrapper, PasswordMark };
