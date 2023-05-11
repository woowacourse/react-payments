import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox, { InputType } from '../../common/InputBox';
import { InputStateProps } from '../../../abstracts/types';
import styled from 'styled-components';

interface CardPasswordInputProps {
  cardPassword1Props: InputStateProps;
  cardPassword2Props: InputStateProps;
}

const CardPasswordInput = ({ cardPassword1Props, cardPassword2Props }: CardPasswordInputProps) => {
  const pw1Inputs: InputType[] = [
    {
      textType: 'number',
      maxLength: 1,
      required: true,
      textSecurity: true,
      inputValue: cardPassword1Props.inputValue as string,
      setInputValues: cardPassword1Props.setInputValue,
    },
  ];
  const pw2Inputs: InputType[] = [
    {
      textType: 'number',
      maxLength: 1,
      required: true,
      textSecurity: true,
      inputValue: cardPassword2Props.inputValue as string,
      setInputValues: cardPassword2Props.setInputValue,
    },
  ];
  return (
    <InputSectionTemplate label="카드 번호">
      <InputBox inputs={pw1Inputs} align="center" />
      <InputBox inputs={pw2Inputs} align="center" />
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
