import React from 'react';
import NextPageButton from './NextPageButton';

export default {
  title: 'Common/NextPageButton',
  component: NextPageButton,
};

const Template = (args) => <NextPageButton {...args} />;

export const NextButton = Template.bind({});
NextButton.args = {
  text: '다음',
};
