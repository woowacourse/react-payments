import { Input } from 'components/common';
import { ChangeEventHandler, useRef, useState } from 'react';

export function PasswordInput() {
  const firstDigitRef = useRef<HTMLInputElement>(null);
  const secondDigitRef = useRef<HTMLInputElement>(null);

  const [firstDigit, setFirstDigit] = useState('');
  const [secondDigit, setSecondDigit] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target === firstDigitRef.current) {
      const { value } = e.target;
      const isNumber = !isNaN(Number(value));

      if (!isNumber) {
        setFirstDigit(value.slice(0, -1));
        return;
      }
      setFirstDigit(value);
    }

    if (e.target === secondDigitRef.current) {
      const { value } = e.target;
      const isNumber = !isNaN(Number(value));

      if (!isNumber) {
        setSecondDigit(value.slice(0, -1));
        return;
      }
      setSecondDigit(value);
    }
  };

  return (
    <>
      <Input
        value={firstDigit}
        type="password"
        maxLength={1}
        ref={firstDigitRef}
        onChange={handleChange}
      />
      <Input
        value={secondDigit}
        type="password"
        maxLength={1}
        ref={secondDigitRef}
        onChange={handleChange}
      />
    </>
  );
}
