import type { Meta } from '@storybook/react';
import { ChangeEvent } from 'react';
import { CardInputValidation } from '../../types';
import CardPassword from '../../components/CardAddForm/CardPassword/CardPassword';

const meta = {
  title: 'Payments/Cards/CardPasswordInput',
  component: CardPassword,
  tags: ['autodocs'],
} satisfies Meta<typeof CardPassword>;

export default meta;

export const Default = () => (
  <CardPassword
    onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {}}
    handleValidationChange={(key: keyof CardInputValidation, value: boolean) => {}}
    values={['', '']}
  ></CardPassword>
);
