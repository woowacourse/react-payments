import { useEffect, useState } from 'react';

interface UseShowParams<T> {
  valueInit: T;
  error: { [K in keyof T]?: string };
  showInit: boolean;
  blur?: boolean;
}

const useShow = <T extends object>({ valueInit, error, showInit, blur }: UseShowParams<T>) => {
  const [pass, setPass] = useState(showInit);

  const calculateShowNext = () => {
    const errors = Object.values(error);
    const allErrorsEmpty = errors.every((value) => value === '');
    if (blur !== undefined) {
      if (isValue() && allErrorsEmpty && blur) {
        setPass(true);
        return;
      } //TODO: 여기 리팩토링해야함

      setPass(false);
      return;
    }

    if (isValue() && allErrorsEmpty) {
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
  }, [error, blur]);

  return { pass };
};
//아니면 show 를 CardOwnerInput 컴포넌트에 넘길떄 같이 넘겨서 거기서 계산해서 css display 속성을 건들이는게 나으려나?
export default useShow;
