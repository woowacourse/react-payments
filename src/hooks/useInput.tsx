import { useState } from 'react';

export interface useInputOption {
  decorateValue?: (string: string) => string;
}
export default function useInput(option?: useInputOption) {
  const [inputValue, setInput] = useState('');

  const initValue = () => setInput('');
  const { decorateValue = (string: string) => string } = option ?? {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pureValue = event.target.value;

    const decoratedValue = decorateValue(pureValue);
    setInput(decoratedValue);
  };

  return { inputValue, onChange, initValue };
}
