import React, { useEffect, useRef, useState } from "react";
import CardPasswordInput from "../atoms/CardPasswordInput";

const isNum = (str: string) => str.replace(/\s/g, '') && !Number.isNaN(Number(str));

const transformNumToBullet = (str: string) => '•'.repeat(str.length);

function CardPasswordFieldset() {
  const [passwords, setPasswords] = useState<Array<string>>(['', '']);
  const inputRef1 = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // 첫번째 필드에 값이 비었다면
    !passwords[0] && inputRef1.current?.focus();
    // 첫번째 필드는 값이 있고 두번째 필드에 값이 비었다면
    (passwords[0] && !passwords[1]) && inputRef2.current?.focus();
  }, [passwords]);

  const handleChange = (index: number, { target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    const lastChar = value.slice(-1);
    const password = passwords[index];

    if (value.length > 1) return;

    if (password.length < value.length) {
      if (!isNum(lastChar)) return;
      passwords[index] = lastChar;
      setPasswords([...passwords]);
      return;
    }

    passwords[index] = '';
    setPasswords([...passwords]);
  };

  return(
    <>
      <CardPasswordInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(0, event)} value={transformNumToBullet(passwords[0])} ref={inputRef1} />
      <CardPasswordInput onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(1, event)} value={transformNumToBullet(passwords[1])} ref={inputRef2} />
      <CardPasswordInput disabled />
      <CardPasswordInput disabled />
    </>
  )
}

export default CardPasswordFieldset;
