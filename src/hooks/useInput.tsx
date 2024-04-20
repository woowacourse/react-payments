import { useState } from 'react';

export interface useInputOption {
  decorateValue?: (string: string) => string;
  maxLength?: number;
}
export default function useInput(option?: useInputOption) {
  const [input, setInput] = useState('');

  const { decorateValue = (string: string) => string, maxLength = Infinity } =
    option ?? {};

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const pureValue = event.target.value;
    if ((event.nativeEvent as KeyboardEvent).isComposing) return;

    if (pureValue.length > maxLength) {
      return;
    }
    const decoratedValue = decorateValue(pureValue);
    setInput(decoratedValue);
  };

  return { input, onChange };
}
