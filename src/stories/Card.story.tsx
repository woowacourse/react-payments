import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardContainer from 'containers/card/CardContainer';
import Card from 'components/card/Card';

export default {
  title: 'Component/Card',
  component: CardContainer,
} as ComponentMeta<typeof CardContainer>;

const BasicTemplate: ComponentStory<typeof CardContainer> = () => <CardContainer />;
const RedTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const YellowTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const OrangeTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const GreenTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const BlueTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const PurpleTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Basic = BasicTemplate.bind({});

export const Red = RedTemplate.bind({});
Red.args = {
  firstInputCardNumber: '1234',
  secondInputCardNumber: '1234',
  thirdInputCardNumber: '1234',
  fourthInputCardNumber: '1234',
  name: 'KIM',
  expiredPeriodMonth: '12',
  expiredPeriodYear: '24',
  cardType: '빨강카드',
};

export const Yellow = YellowTemplate.bind({});
Yellow.args = {
  firstInputCardNumber: '1234',
  secondInputCardNumber: '1234',
  thirdInputCardNumber: '1234',
  fourthInputCardNumber: '1234',
  name: 'KIM',
  expiredPeriodMonth: '12',
  expiredPeriodYear: '24',
  cardType: '노랑카드',
};

export const Orange = OrangeTemplate.bind({});
Orange.args = {
  firstInputCardNumber: '1234',
  secondInputCardNumber: '1234',
  thirdInputCardNumber: '1234',
  fourthInputCardNumber: '1234',
  name: 'KIM',
  expiredPeriodMonth: '12',
  expiredPeriodYear: '24',
  cardType: '주황카드',
};

export const Green = GreenTemplate.bind({});
Green.args = {
  firstInputCardNumber: '1234',
  secondInputCardNumber: '1234',
  thirdInputCardNumber: '1234',
  fourthInputCardNumber: '1234',
  name: 'KIM',
  expiredPeriodMonth: '12',
  expiredPeriodYear: '24',
  cardType: '초록카드',
};

export const Blue = BlueTemplate.bind({});
Blue.args = {
  firstInputCardNumber: '1234',
  secondInputCardNumber: '1234',
  thirdInputCardNumber: '1234',
  fourthInputCardNumber: '1234',
  name: 'KIM',
  expiredPeriodMonth: '12',
  expiredPeriodYear: '24',
  cardType: '파랑카드',
};

export const Purple = PurpleTemplate.bind({});
Purple.args = {
  firstInputCardNumber: '1234',
  secondInputCardNumber: '1234',
  thirdInputCardNumber: '1234',
  fourthInputCardNumber: '1234',
  name: 'KIM',
  expiredPeriodMonth: '12',
  expiredPeriodYear: '24',
  cardType: '보라카드',
};
