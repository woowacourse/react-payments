import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';
import { DefaultInputWrapper, DefaultInput } from '../../shared/RegisterInputWrapper/style';

const InputWrapper = styled(DefaultInputWrapper)`
  width: 137px;
`;

const Input = styled(DefaultInput)`
  width: 44px;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Divider = styled.span`
  font-size: 18px;
  color: ${PALETTE.DEFAULT_CYAN};
  margin: 0 4px;
`;

export { InputWrapper, Input, Divider };
