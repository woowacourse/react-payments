import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';
import { DefaultInputWrapper, DefaultInput } from '../../shared/RegisterInputWrapper/style';

const InputWrapper = styled(DefaultInputWrapper)`
  width: 318px;
`;

const Input = styled(DefaultInput)``;

const Divider = styled.span`
  font-size: 18px;
  color: ${PALETTE.DEFAULT_CYAN};
  margin: 0 4px;
`;

export { InputWrapper, Input, Divider };
