import { useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';

type CardNumberInputProps = {
  updateCardNumber: (cardNumber: string) => void;
};

const CardNumberInput = ({ updateCardNumber }: CardNumberInputProps) => {
  const [cardNumber, setCardNumber] = useState('');

  const addHyphensInCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/[^0-9-]/.test(e.target.value)) return alert('숫자만 입력이 가능합니다!');

    const cardNumber = e.target.value;
    const hyphenRemovedCardNumber = cardNumber.replaceAll('-', '');
    const cardNumberWithHyphens = (hyphenRemovedCardNumber.match(/.{1,4}/g) || []).join('-');

    setCardNumber(cardNumberWithHyphens);
    updateCardNumber(cardNumber);
  };

  return (
    <CardInfoInput title="카드 번호">
      <Input width="100%" onChange={addHyphensInCardNumber} maxLength={19} name="cardNumber" value={cardNumber} />
    </CardInfoInput>
  );
};

export default CardNumberInput;
