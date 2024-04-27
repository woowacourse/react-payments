import { useEffect, useState } from 'react';

interface UseShowParams<T> {
  valueInit: T;
  error: { [K in keyof T]?: string };
  showInit: boolean;
  blur?: boolean;
}

const useShow = <T extends object>({ valueInit, error, showInit, blur }: UseShowParams<T>) => {
  const [pass, setPass] = useState(showInit);

  const isBlur = () => {
    if (blur !== undefined) return blur;
    return true;
  };

  const calculateShowNext = () => {
    const errors = Object.values(error);
    const allErrorsEmpty = errors.every((value) => value === '');
    if (isValue() && allErrorsEmpty && isBlur()) {
      setPass(true);
      return;
    }
    setPass(false);
  };
  const isValue = () => {
    const values = Object.values(valueInit);
    const allHaveValue = values.every((value) => value !== '');
    return allHaveValue;
  };

  useEffect(() => {
    calculateShowNext();
  });

  return { pass };
};
export default useShow;
