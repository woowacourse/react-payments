import CardNumber from './CardNumber';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardNumber',
  component: CardNumber,
};

const Template = (args) => {
  const [cardNumbers, setCardNumbers] = useState(args.cardNumbers);
  return <CardNumber cardNumbers={cardNumbers} setCardNumbers={setCardNumbers} />;
};

export const CardNumberInput = Template.bind({});
CardNumberInput.args = { cardNumbers: ['', '', '', ''] };
