import { ChangeEvent, useState } from 'react';
import type { Meta } from '@storybook/react';
import CardPassword from '../../components/CardAddForm/CardPassword/CardPassword';

const meta = {
  title: 'Payments/Cards/CardPasswordInput',
  component: CardPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

export const Default = () => {
  const [securityCode, setSecurityCode] = useState(['', '']);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecurityCode((securityCode) => {
      const newSecurityCode = [...securityCode];
      newSecurityCode[Number(event.target.dataset.index)] = event.target.value;

      return newSecurityCode;
    });
  };

  return (
    <CardPassword onInputChange={onChange} values={securityCode} isValid={false}></CardPassword>
  );
};
