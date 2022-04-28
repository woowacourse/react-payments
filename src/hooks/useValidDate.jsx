import { useState } from 'react';

export default function useValidDate(initialValue) {
  const [validDate, setValidDate] = useState(initialValue);

  const handler = ({ target: { value } }) => {
    if (value.slice(-1) === '/' && value.length !== 3) return;
    // 정규식: 숫자와 /로 구성된 문자열이 아니면 return
    if (!/^$|^[0-9]{0,2}[/]{0,1}[0-9]{0,2}$/.test(value)) return;

    if (value.length === 3) {
      if (value.includes('/')) {
        setValidDate(value.replace('/', ''));

        return;
      }

      setValidDate(`${value.slice(0, 2)}/${value.slice(2, 3)}`);

      return;
    }

    setValidDate(value);
  };

  return [validDate, handler];
}
