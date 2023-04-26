import { useState } from 'react';
import type { Meta } from '@storybook/react';
import CardExpirationDate from '../../components/CardAddForm/CardExpirationDate/CardExpirationDate';
import formatter from '../../utils/formatter';

const meta = {
  title: 'Payments/Cards/CardExpirationDateInput',
  component: CardExpirationDate,
  tags: ['autodocs'],
} satisfies Meta<typeof CardExpirationDate>;

export default meta;

export const Default = () => {
  const [expirationDate, setExpirationDate] = useState({ month: '', year: '' });

  return (
    <CardExpirationDate
      onInputChange={(event) => {
        const { month, year } = formatter.expirationDate(event.target.value);

        setExpirationDate({ month: month!, year });
      }}
      value={expirationDate}
      isValid={true}
    ></CardExpirationDate>
  );
};
