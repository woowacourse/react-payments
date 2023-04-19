import { ChangeEventHandler, useRef, useState } from 'react';
import Input from './Input/Input';

type Props = {};

function ExpiredDateInput({}: Props) {
  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target === monthRef.current) {
      const { value } = e.target;
      const isNumber = !isNaN(Number(value));

      if (!isNumber) {
        setMonth(value.slice(0, -1));
        return;
      }
      setMonth(value);
    }

    if (e.target === yearRef.current) {
      const { value } = e.target;
      const isNumber = !isNaN(Number(value));

      if (!isNumber) {
        setYear(value.slice(0, -1));
        return;
      }
      setYear(value);
    }
  };

  return (
    <>
      <Input
        value={month}
        type="text"
        maxLength={2}
        placeholder="MM"
        ref={monthRef}
        onChange={handleChange}
      />
      <Input
        value={year}
        type="text"
        maxLength={2}
        placeholder="YY"
        ref={yearRef}
        onChange={handleChange}
      />
    </>
  );
}

export default ExpiredDateInput;
