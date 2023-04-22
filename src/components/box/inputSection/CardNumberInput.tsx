import type { CardType } from '../../../types';

import InputSectionTemplate from '../../template/InputSectionTemplate';
import InputBox from '../../common/InputBox';
import Input from '../../common/Input';

interface Props {
  cardNumber: CardType['cardNumber'];
  setCardNumber: (index: number) => (value: CardType['cardNumber'][number]) => void;
}

const CardNumberInput = ({ cardNumber, setCardNumber }: Props) => {
  return (
    <InputSectionTemplate label="카드 번호">
      <InputBox align="center" separator="-" isFullWidth>
        {cardNumber.map((value, index) => (
          <Input
            textType="number"
            value={value}
            setValue={setCardNumber(index)}
            length={4}
            required
            textSecurity={index >= 2}
          />
        ))}
      </InputBox>
    </InputSectionTemplate>
  );
};

export default CardNumberInput;
