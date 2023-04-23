import { useState } from 'react';
import Input from './Input';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Input',
  component: Input,
};

export function CenterNumberInput() {
  const [value, setValue] = useState('0123456789');
  return <Input textType="number" value={value} setValue={setValue} length={10} />;
}

export function LeftStringInput() {
  const [value, setValue] = useState('abcdefghij');
  return <Input textType="string" value={value} setValue={setValue} length={10} textAlign="left" />;
}

export function CenterSecurityNumberInput() {
  const [value, setValue] = useState('0123');
  return <Input textType="number" value={value} setValue={setValue} length={4} textSecurity />;
}

export function PlaceholderInput() {
  const [value, setValue] = useState('');
  return <Input textType="string" value={value} setValue={setValue} length={10} placeholder="placeholder" />;
}
