import CardNumber from './CardNumber';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardNumber',
  component: CardNumber,
};

const Template = (args) => {
  const [cardInfo, setCardInfo] = useState(args.cardInfo);
  return <CardNumber cardInfo={cardInfo} setCardInfo={setCardInfo} />;
};

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  cardInfo: {
    number1: '',
    number2: '',
    number3: '',
    number4: '',
  },
};
