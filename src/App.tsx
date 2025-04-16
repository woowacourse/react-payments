import styles from './App.module.css';
import './index.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import { InputSection } from './components/InputSection/InputSection';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardValid, setCardValid] = useState([true, true, true, true]);

  const [expirationPeriod, setExpirationPeriod] = useState(['', '']);
  const [expirationPeriodValid, setExpirationPeriodValid] = useState([true]);

  const handleNumberChange = (index: number, value: string) => {
    const isValid = /^[0-9]*$/.test(value);

    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = value;
    setCardNumbers(updatedCardNumbers);

    const updatedValid = [...cardValid];
    updatedValid[index] = isValid;
    setCardValid(updatedValid);
  };

  const handleExpirationPeriodChange = (index: number, value: string) => {
    const isValid = /^[0-9]*$/.test(value);

    const updatedCardNumbers = [...expirationPeriod];
    updatedCardNumbers[index] = value;
    setExpirationPeriod(updatedCardNumbers);

    const updatedValid = [...expirationPeriodValid];
    updatedValid[index] = isValid;
    setExpirationPeriodValid(updatedValid);
  };

  return (
    <div>
      <Card numbers={cardNumbers} />
      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="카드번호" />

      <InputSection.InputWrapper numbers={cardNumbers} onChange={handleNumberChange} valid={cardValid} />
      {cardValid.includes(false) && <InputSection.Error message={'숫자만 입력 가능합니다.'} />}

      <InputSection.TitleWrapper>
        <InputSection.Title title="카드 유효기간을 입력해 주세요" />
        <InputSection.SubTitle title="월/년도(MMYY)를 순서대로 입력해 주세요." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="유효기간" />
      <InputSection.InputWrapper
        numbers={expirationPeriod}
        onChange={handleExpirationPeriodChange}
        valid={expirationPeriodValid}
      />
      {cardValid.includes(false) && <InputSection.Error message={'숫자만 입력 가능합니다.'} />}
    </div>
  );
}
