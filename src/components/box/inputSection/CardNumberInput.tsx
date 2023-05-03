import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

import { useCardForm } from '../../../context/CardFormContext';

interface Props {
  insert: (index: number) => (element: HTMLInputElement | null) => void;
  focus: (index: number) => (go: number) => void;
}

const CardNumberInput = ({ insert, focus }: Props) => {
  const [{ cardNumber }, dispatch] = useCardForm();

  const setCardNumberIndex = (index: number) => (value: string) => {
    dispatch({ type: 'SET_LIST_VALUE', key: 'cardNumber', index, value });
  };

  return (
    <InputSectionTemplate label="카드 번호">
      <InputBox align="center" separator="-" isFullWidth>
        {cardNumber.map((value, index) => (
          <Input
            textType="number"
            value={value}
            setValue={setCardNumberIndex(index)}
            length={4}
            required
            textSecurity={index >= 2}
            insert={insert(index)}
            focus={focus(index)}
          />
        ))}
      </InputBox>
    </InputSectionTemplate>
  );
};

export default CardNumberInput;
