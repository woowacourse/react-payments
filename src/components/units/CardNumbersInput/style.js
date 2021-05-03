import styled from 'styled-components/macro';
import PALETTE from '../../../styles/palette';
import { DefaultInputWrapper, DefaultInput } from '../../shared/RegisterInputWrapper/style';

const InputWrapper = styled(DefaultInputWrapper)`
  width: 318px;
`;

const NumberInput = styled(DefaultInput)`
  width: 54px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  text-align: center;
`;

const PasswordInput = styled(DefaultInput)`
  width: 54px;
  font: small-caption;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 2px;
`;

const Divider = styled.span`
  font-size: 18px;
  color: ${PALETTE.DEFAULT_CYAN};
  margin: 0 4px;
`;

export { InputWrapper, NumberInput, PasswordInput, Divider };
