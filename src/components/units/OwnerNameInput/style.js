import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';
import { DefaultInputWrapper, DefaultInput } from '../../shared/RegisterInputWrapper/style';

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled(DefaultInputWrapper)`
  width: 318px;
  border: ${({ isValid }) => (isValid ? 'none' : '1px solid red')};
`;

const Input = styled(DefaultInput)`
  &::-webkit-input-placeholder {
    font-size: 16px;
  }
`;

const ErrorMessage = styled.div`
  display: ${({ isValid }) => (isValid ? 'none' : 'inline')};
  transform: translateY(-16px);
  font-size: 4px;
  color: red;
`;

const Divider = styled.span`
  font-size: 18px;
  color: ${PALETTE.DEFAULT_CYAN};
  margin: 0 4px;
`;

export { Root, InputWrapper, Input, ErrorMessage, Divider };
