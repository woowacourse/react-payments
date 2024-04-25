import { OptionHTMLAttributes } from 'react';

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  text: string;
}

export default function Option({ value, text }: OptionProps) {
  return <option value={value}>{text}</option>;
}
