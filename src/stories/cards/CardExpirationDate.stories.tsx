import type { Meta } from '@storybook/react';
import CardExpirationDate from '../../components/CardAddForm/CardExpirationDate/CardExpirationDate';

const meta = {
  title: 'Payments/Cards/CardExpirationDateInput',
  component: CardExpirationDate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

export const Default = () => (
  <CardExpirationDate
    onInputChange={() => {}}
    changeInputValidation={() => {}}
    value={{ month: '', year: '' }}
  ></CardExpirationDate>
);
