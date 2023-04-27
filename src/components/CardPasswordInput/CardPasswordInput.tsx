import { useState, useRef, useContext } from 'react';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import Input from '../Input/Input';
import { NUMBER_REGEX } from '../../constant/regex';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { CardInfoContext } from '../../context/CardInfoContext';

const CardPasswordInput = () => {
  const { firstDigit, setFirstDigit, secondDigit, setSecondDigit } = useContext(CardInfoContext);
  const secondDigitRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState('');

  const updateDigit = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (NUMBER_REGEX.test(e.target.value)) {
      setError('0부터 9까지 숫자만 입력이 가능합니다.');
      index === 1 ? setFirstDigit('') : setSecondDigit('');
    } else {
      const currentDigit = e.target.value;
      index === 1 ? setFirstDigit(currentDigit) : setSecondDigit(currentDigit);
      setError('');
      if (index === 1 && currentDigit.length === 1) {
        secondDigitRef.current?.focus();
      }
    }
  };

  return (
    <div>
      <CardInfoInput title="카드 비밀번호">
        <Input width="15%" value={firstDigit} maxLength={1} onChange={e => updateDigit(1, e)} />
        <Input width="15%" value={secondDigit} maxLength={1} onChange={e => updateDigit(2, e)} ref={secondDigitRef} />
      </CardInfoInput>
      <ErrorMessage>{error}</ErrorMessage>
    </div>
  );
};

export default CardPasswordInput;
