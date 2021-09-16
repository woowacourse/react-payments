import styled from 'styled-components/macro';
import { DefaultInputWrapper, DefaultInput } from '../../shared/RegisterInputWrapper/style';

const InputWrapper = styled(DefaultInputWrapper)`
  width: 84px;
`;

const PasswordInput = styled(DefaultInput)`
  width: 56px;
  font: small-caption;
  font-size: 1rem;
  letter-spacing: 2px;
  text-align: center;
`;

const HelpMark = styled.img`
  position: absolute;
  right: -35px;
  cursor: pointer;
`;

const CVCImg = styled.img`
  width: 60px;
  position: absolute;
  right: -100px;
`;

export { InputWrapper, PasswordInput, HelpMark, CVCImg };
