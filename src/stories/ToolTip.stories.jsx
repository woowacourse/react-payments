/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { userEvent, within } from '@storybook/testing-library';
import ToolTip from '../components/common/ToolTip';

export default {
  title: 'ToolTip',
  component: ToolTip,
};

const Template = (args) => <ToolTip {...args}>?</ToolTip>;

export const DefaultToolTip = Template.bind({});
DefaultToolTip.args = {
  tip: '보안카드는 카드 뒷면 3자리 숫자입니다.',
};

DefaultToolTip.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.hover(canvas.getByTestId('icon'));
};

export const SecondaryToolTip = Template.bind({});
SecondaryToolTip.args = {
  tip: 'tooltip은 원하는대로 작성이 가능합니다.',
};
