import CardExpirationDate from './CardExpirationDate';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardExpirationDate',
  component: CardExpirationDate,
};

const Template = (args) => {
  const [cardInfo, setCardInfo] = useState(args.cardInfo);
  return <CardExpirationDate cardInfo={cardInfo} setCardInfo={setCardInfo} />;
};

export const CardExpirationDateInput = Template.bind({});
CardExpirationDateInput.args = {
  cardInfo: {
    month: '',
    year: '',
  },
};
