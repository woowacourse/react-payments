import './App.css';
import './index.css';
import Card from './stories/Card';
import Input from './stories/Input';
import { useState } from 'react';

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
      <div style={{ display: 'flex', gap: '8px' }}>
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
    </div>
  );
}
