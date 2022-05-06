import React, { useContext } from 'react';
import CardOwner from '../components/CardFormPage/CardOwner';
import { CardInfoContext } from '../context';

export default {
  title: 'CardOwner',
  component: CardOwner,
};

const Template = () => {
  const { owner } = useContext(CardInfoContext);
  return <CardOwner owner={owner} />;
};

export const Primary = Template.bind({});
