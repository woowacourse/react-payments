/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story, Meta } from '@storybook/react';
import { ChangeEvent } from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
} as Meta;

const Template: Story<any> = (args) => <Input {...args} />;

export const FullWidthInput = Template.bind({});
FullWidthInput.args = {
  type: 'string',
  value: '1111-1111-***',
  width: '100%',
  textAlign: 'center',
  onChange: (event: ChangeEvent<HTMLInputElement>) => event.target.value,
};

export const HalfWidthInput = Template.bind({});
HalfWidthInput.args = {
  type: 'string',
  value: '1111-1111-***',
  width: '50%',
  textAlign: 'center',
  onChange: (event: ChangeEvent<HTMLInputElement>) => event.target.value,
};

export const SmallWidthInput = Template.bind({});
SmallWidthInput.args = {
  type: 'string',
  value: '***',
  width: '20%',
  textAlign: 'center',
  onChange: (event: ChangeEvent<HTMLInputElement>) => event.target.value,
};

export const FixedWidthInput = Template.bind({});
FixedWidthInput.args = {
  type: 'string',
  value: '*',
  width: '24px',
  textAlign: 'center',
  onChange: (event: ChangeEvent<HTMLInputElement>) => event.target.value,
};

export const TextAlignStartInput = Template.bind({});
TextAlignStartInput.args = {
  type: 'string',
  value: 'NOAH',
  width: '60%',
  textAlign: 'start',
  onChange: (event: ChangeEvent<HTMLInputElement>) => event.target.value,
};
