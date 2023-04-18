import { StoryFn } from '@storybook/react';
import Title, { Props } from './Title';

export default {
  title: 'Title',
  component: Title,
};

const Template: StoryFn<Props> = (args: Props) => <Title {...args} />;

export const CardNumbers = Template.bind({});
CardNumbers.args = {
  text: '카드 번호',
};

export const ExpiredDate = Template.bind({});
ExpiredDate.args = {
  text: '만료일',
};
