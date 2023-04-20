import type { InputStateProps } from '../../../types';
import styled from 'styled-components';

import InputBox, { InputType } from '../../common/InputBox';
import InputSectionTemplate from '../../template/InputSectionTemplate';

interface CardPasswordInputProps {
  cardPassword1Props: InputStateProps;
  cardPassword2Props: InputStateProps;
}

const CardPasswordInput = ({ cardPassword1Props, cardPassword2Props }: CardPasswordInputProps) => {
  const inputs: InputType[] = [{ textType: 'number', maxLength: 1, required: true, textSecurity: true }];
  return (
    <InputSectionTemplate label="카드 번호">
      <InputBox inputs={inputs} align="center" {...cardPassword1Props} />
      <InputBox inputs={inputs} align="center" {...cardPassword2Props} />
      <PasswordPlaceholder>∙</PasswordPlaceholder>
      <PasswordPlaceholder>∙</PasswordPlaceholder>
    </InputSectionTemplate>
  );
};

export default CardPasswordInput;

const PasswordPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 48.75px;

  font-size: 20px;
  color: #000000;
  -webkit-text-security: disc;
`;
