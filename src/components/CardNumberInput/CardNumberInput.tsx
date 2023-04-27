import { useContext, useState } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';
import { CardInfoContext } from '../../context/CardInfoContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const CardNumberInput = () => {
  const { cardNumber, setCardNumber } = useContext(CardInfoContext);
  const [error, setError] = useState('');

  const addHyphensInCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.target.value;
    if (NUMBER_REGEX.test(e.target.value)) {
      setError('0부터 9까지 숫자만 입력 가능합니다.');
    } else {
      const hyphenRemovedCardNumber = cardNumber.replaceAll('-', '');
      const cardNumberWithHyphens = (hyphenRemovedCardNumber.match(/.{1,4}/g) || []).join('-');

      setCardNumber(cardNumberWithHyphens);
      setError('');
    }
  };

  return (
    <div>
      <CardInfoInput title="카드 번호">
        <Input width="100%" onChange={addHyphensInCardNumber} maxLength={19} name="cardNumber" value={cardNumber} />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default CardNumberInput;
