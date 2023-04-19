import { StoryFn } from '@storybook/react';
import { Label, Props } from './Label';

export default {
  title: 'Label',
  component: Label,
};

const Template: StoryFn<Props> = (args: Props) => <Label {...args} />;

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  text: '카드 번호',
};

export const ExpiredDate = Template.bind({});
ExpiredDate.args = {
  text: '만료일',
};
