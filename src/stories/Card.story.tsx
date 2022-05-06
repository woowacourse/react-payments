import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardContainer from 'containers/card/CardContainer';
import Card from 'components/card/Card';

export default {
  title: 'Container/Card',
  component: CardContainer,
} as ComponentMeta<typeof CardContainer>;

const BasicTemplate: ComponentStory<typeof CardContainer> = () => <CardContainer />;
const RedTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = BasicTemplate.bind({});

export const Red = RedTemplate.bind({});
Red.args = {
  firstInputCardNumber: '',
  secondInputCardNumber: '',
  thirdInputCardNumber: '',
  fourthInputCardNumber: '',
  name: '',
  expiredPeriodMonth: '',
  expiredPeriodYear: '',
  cardType: '빨강카드',
};
