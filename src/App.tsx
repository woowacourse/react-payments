import React, { useState } from "react";

function CardNumberInput() {
  const [numbers, setNumbers] = useState<string>('');

  // 0 1 2 3 _4_ 5 6 7 8 _9_ 10 11 12 13 _14_ 15 16 17 18

  const handleCardNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length >= 20) {
      return;
    }

    const lastChar = value.slice(-1);
    const isNum = (str: string) => /([0-9])/.test(str);

    if (lastChar && !isNum(lastChar) && lastChar !== '*' && lastChar !== '-') return;
    
    if (value.length === 5 || value.length === 10 || value.length === 15) {
      if (numbers.length < value.length) {
        const newVal = numbers + '-' + lastChar;
        setNumbers(newVal);
        return;
      }
    }

    setNumbers(value);
  }

  const _nums = numbers.split('').map((char, index) => {
    if (index > 9 && index !== 14) {
      return '*';
    }
    return char;
  }).join('');

  return(
    <>
      <input onChange={handleCardNumberInput} value={_nums} />
    </>
  )
}

function App() {
  return (
    <>
      <CardNumberInput />
    </>
  );
}

export default App;
