import { useState, useCallback } from 'react';

export default function useCardPassword(initialValue) {
  const [password, setPassword] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    // 정규식: 숫자로 구성된 문자열이 아니면 return
    if (!/^$|^[0-9]{0,1}$/.test(value)) return;

    setPassword(value);
  }, []);

  return [password, handler];
}
