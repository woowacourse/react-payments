import styled from 'styled-components';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

import { useCardForm } from '../../../context/CardFormContext';

interface Props {
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const CardPasswordInput = ({ insert, focus }: Props) => {
  const [{ cardPassword }, dispatch] = useCardForm();

  const setCardPasswordIndex = (index: number) => (value: string) => {
    dispatch({ type: 'SET_LIST_VALUE', key: 'cardPassword', index, value });
  };

  return (
    <InputSectionTemplate label="카드 번호">
      {cardPassword.map((value, index) => (
        <InputBox align="center">
          <Input
            textType="number"
            value={value}
            setValue={setCardPasswordIndex(index)}
            length={1}
            textSecurity
            insert={insert(8 + index)}
            focus={focus(8 + index)}
            required
          />
        </InputBox>
      ))}
      <ReadonlyInputBox>∙</ReadonlyInputBox>
      <ReadonlyInputBox>∙</ReadonlyInputBox>
    </InputSectionTemplate>
  );
};

export default CardPasswordInput;

const ReadonlyInputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 48.75px;

  font-size: 20px;
  color: #000000;
  -webkit-text-security: disc;
`;
