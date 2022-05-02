import CardPassword from './CardPassword';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardPassword',
  component: CardPassword,
};

const Template = (args) => {
  const [cardInfo, setCardInfo] = useState(args.cardInfo);
  return <CardPassword cardInfo={cardInfo} setCardInfo={setCardInfo} />;
};

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  cardInfo: {
    password1: '',
    password2: '',
  },
};
