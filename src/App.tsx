import styles from './App.module.css';
import './index.css';

import { useState } from 'react';
import Input from './components/Input/Input';
import Card from './components/Card/Card';

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
      <div className={styles.titleWrapper}>
        <h1>결제할 카드 번호를 입력해주세요</h1>
        <p>본인 명의의 카드만 입력 가능합니다.</p>
      </div>
      <p className={styles.inputTitle}>카드 번호</p>
      <div className={styles.inputWrapper}>
        {cardNumbers.map((value, index) => (
          <Input
            key={index}
            value={value}
            isValid={cardValid[index]}
            placeholder="1234"
            onChange={(e) => handleChange(index, e.target.value)}
          />
        ))}
      </div>
      {cardValid.includes(false) && <p className={styles.errorMessage}>숫자만 입력 가능합니다.</p>}
    </div>
  );
}
