import CVC from './CVC';
import { useState } from 'react';

export default {
  title: 'CardAddPage/CVC',
  component: CVC,
};

const Template = (args) => {
  const [cardInfo, setCardInfo] = useState(args.cardInfo);
  return <CVC cardInfo={cardInfo} setCardInfo={setCardInfo} />;
};

export const CVCInput = Template.bind({});
CVCInput.args = {
  cardInfo: {
    cvc: '',
  },
};
