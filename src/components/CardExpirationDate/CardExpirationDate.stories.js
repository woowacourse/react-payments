import CardExpirationDate from './CardExpirationDate';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardExpirationDate',
  component: CardExpirationDate,
};

const Template = (args) => {
  const [cardExpirationDate, setCardExpirationDate] = useState(args.cardExpirationDate);
  return (
    <CardExpirationDate
      cardExpirationDate={cardExpirationDate}
      setCardExpirationDate={setCardExpirationDate}
    />
  );
};

export const CardExpirationDateInput = Template.bind({});
CardExpirationDateInput.args = {
  cardExpirationDate: {
    month: '',
    year: '',
  },
};
