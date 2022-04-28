import { useState, useCallback } from 'react';

export default function useCVC(initialValue) {
  const [CVC, setCVC] = useState(initialValue);

  const handler = useCallback(({ target: { value } }) => {
    // 정규식: 숫자로 구성된 문자열이 아니면 return
    if (!/^$|^[0-9]{0,3}$/.test(value)) return;

    setCVC(value);
  }, []);

  return [CVC, handler];
}
