/* eslint-disable react/function-component-definition */
/* eslint-disable import/no-extraneous-dependencies */

import { Story, Meta } from '@storybook/react';
import Input from '..';

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
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => (event.target.value),
};
