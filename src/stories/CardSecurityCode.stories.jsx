import React, { useContext } from 'react';
import CardSecurityCode from '../components/CardFormPage/CardSecurityCode';
import { CardInfoContext } from '../context';

export default {
  title: 'CardSecurityCode',
  component: CardSecurityCode,
};

const Template = () => {
  const { cardCode } = useContext(CardInfoContext);
  return <CardSecurityCode cardCode={cardCode} />;
};

export const Primary = Template.bind({});
