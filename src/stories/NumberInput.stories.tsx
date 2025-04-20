import type { Meta } from '@storybook/react';
import NumberInput from '../components/common/NumberInput';
import { useState } from 'react';

const meta = {
  title: 'NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;

export const CardNumber = () => {
  const [value, setValue] = useState('');
  return <NumberInput value={value} setValue={setValue} maxLength={4} placeholder="1234" />;
};

export const CVCNumber = () => {
  const [value, setValue] = useState('');
  return <NumberInput value={value} setValue={setValue} maxLength={3} placeholder="123" />;
};

export const ExpirationMonth = () => {
  const [value, setValue] = useState('');
  return <NumberInput value={value} setValue={setValue} maxLength={2} placeholder="MM" />;
};

export const ExpirationYear = () => {
  const [value, setValue] = useState('');
  return <NumberInput value={value} setValue={setValue} maxLength={2} placeholder="YY" />;
};
