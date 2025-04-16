import styles from './App.module.css';
import './index.css';
import { useState } from 'react';
import Card from './components/Card/Card';
import { InputSection } from './components/InputSection/InputSection';

export default function App() {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [cardValid, setCardValid] = useState([true, true, true, true]);

  const handleChange = (index: number, value: string) => {
    const isValid = /^[0-9]*$/.test(value);

    const updatedCardNumbers = [...cardNumbers];
    updatedCardNumbers[index] = value;
    setCardNumbers(updatedCardNumbers);

    const updatedValid = [...cardValid];
    updatedValid[index] = isValid;
    setCardValid(updatedValid);
  };

  return (
    <div>
      <Card numbers={cardNumbers} />
      <InputSection.TitleWrapper>
        <InputSection.Title title="결제할 카드 번호를 입력해주세요" />
        <InputSection.SubTitle title="본인 명의의 카드만 입력 가능합니다." />
      </InputSection.TitleWrapper>
      <InputSection.Label text="카드번호" />
      <InputSection.InputWrapper cardNumbers={cardNumbers} onChange={handleChange} cardValid={cardValid} />
      {cardValid.includes(false) && <InputSection.Error message={'숫자만 입력 가능합니다.'} />}
    </div>
  );
}
