import { useState } from 'react';

export default function useBlur() {
  const [touched, setTouched] = useState(false);
  const handleBlur = () => setTouched(true);

  return { touched, handleBlur };
}
