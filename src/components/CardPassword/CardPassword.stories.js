import CardPassword from './CardPassword';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CardPassword',
  component: CardPassword,
};

const Template = (args) => {
  const [cardPasswords, setCardPasswords] = useState(args.cardPasswords);
  return <CardPassword cardPasswords={cardPasswords} setCardPasswords={setCardPasswords} />;
};

export const CardPasswordsInput = Template.bind({});
CardPasswordsInput.args = { cardPasswords: ['', ''] };
