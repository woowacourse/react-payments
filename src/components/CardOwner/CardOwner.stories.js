import CardOwner from './CardOwner';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardOwner',
  component: CardOwner,
};

const Template = (args) => {
  const [cardOwner, setOwner] = useState(args.cardOwner);
  return <CardOwner cardOwner={cardOwner} setOwner={setOwner} />;
};

export const CardOwnerInput = Template.bind({});
CardOwnerInput.args = {
  cardOwner: '',
};
