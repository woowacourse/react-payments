import { ChangeEvent } from 'react';
import type { Meta } from '@storybook/react';
import { CardInputValidation } from '../../types';
import CardExpirationDate from '../../components/CardAddForm/CardExpirationDate/CardExpirationDate';

const meta = {
  title: 'Payments/Cards/CardExpirationDateInput',
  component: CardExpirationDate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

export const Default = () => (
  <CardExpirationDate
    onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {}}
    handleValidationChange={(key: keyof CardInputValidation, value: boolean) => {}}
    value={{ month: '', year: '' }}
  ></CardExpirationDate>
);
