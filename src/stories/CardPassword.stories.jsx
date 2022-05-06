import React, { useContext, useMemo } from 'react';
import CardPassword from '../components/CardFormPage/CardPassword';
import { CardInfoContext } from '../context';

export default {
  title: 'CardPassword',
  component: CardPassword,
  argTypes: {
    pwd: { controls: 'object' },
  },
};

const Template = () => {
  const { pwd } = useContext(CardInfoContext);
  const isCorrectPwd = useMemo(() => Object.values(pwd).join('').length === 2, [pwd]);

  return <CardPassword pwd={pwd} isCorrectPwd={isCorrectPwd} />;
};

export const Primary = Template.bind({});
