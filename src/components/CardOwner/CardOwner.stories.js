import CardOwner from './CardOwner';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardOwner',
  component: CardOwner,
};

const Template = (args) => {
  const [cardInfo, setCardInfo] = useState(args.cardInfo);
  return <CardOwner cardInfo={cardInfo} setCardInfo={setCardInfo} />;
};

export const CardOwnerInput = Template.bind({});
CardOwnerInput.args = {
  cardInfo: {
    owner: '',
  },
};
