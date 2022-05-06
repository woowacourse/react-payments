import React, { useContext } from 'react';
import CardShape from '../../components/CardFormPage/CardShape';
import { CardInfoContext } from '../../context';

export default {
  title: 'CardShape',
  component: CardShape,
  argTypes: {
    dimensions: { controls: 'object' },
  },
};

const Template = args => {
  const { cardCompany, cardNumbers, owner, cardDate } = useContext(CardInfoContext);
  return (
    <CardShape {...args} cardCompany={cardCompany} cardNumbers={cardNumbers} cardOwner={owner} cardDate={cardDate} />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  dimensions: { width: 754, height: 200 },
};
