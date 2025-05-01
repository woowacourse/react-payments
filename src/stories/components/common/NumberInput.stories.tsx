import type { Meta } from '@storybook/react';
import { useState } from 'react';
import NumberInput from '../../../components/common/NumberInput';

const meta = {
  title: 'Components/common/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
} satisfies Meta<typeof NumberInput>;

export default meta;

export const CardNumber = () => {
  const [value, setValue] = useState('');
  return (
    <NumberInput
      value={value}
      setValue={setValue}
      maxLength={4}
      placeholder="1234"
      isError={false}
    />
  );
};

export const CardNumberError = () => {
  const [value, setValue] = useState('');
  return (
    <NumberInput
      value={value}
      setValue={setValue}
      maxLength={4}
      placeholder="1234"
      isError={true}
    />
  );
};

export const CVCNumber = () => {
  const [value, setValue] = useState('');
  return (
    <NumberInput
      value={value}
      setValue={setValue}
      maxLength={3}
      placeholder="123"
      isError={false}
    />
  );
};

export const ExpirationMonth = () => {
  const [value, setValue] = useState('');
  return (
    <NumberInput value={value} setValue={setValue} maxLength={2} placeholder="MM" isError={false} />
  );
};

export const ExpirationYear = () => {
  const [value, setValue] = useState('');
  return (
    <NumberInput value={value} setValue={setValue} maxLength={2} placeholder="YY" isError={false} />
  );
};
