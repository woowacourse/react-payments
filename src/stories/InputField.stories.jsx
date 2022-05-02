import React from 'react';
import Input from '../components/common/Input';
import InputField from '../components/common/InputField';

export default {
  title: 'InputField',
  component: InputField,
};

const Template = args => <InputField {...args} />;
const InputTemplate = args => <Input {...args} />;

const DefaultInput = InputTemplate.bind({});

export const Default = Template.bind({});
Default.args = {
  labelText: 'default input',
  children: <DefaultInput placeholder="placeholder" />,
};

export const TwoInputs = Template.bind({});
TwoInputs.args = {
  labelText: 'two inputs',
  children: [<DefaultInput placeholder="placeholder" />, '/', <DefaultInput placeholder="placeholder" />],
};

export const FourInputs = Template.bind({});
FourInputs.args = {
  labelText: 'four inputs',
  children: [
    <DefaultInput placeholder="placeholder" />,
    '-',
    <DefaultInput placeholder="placeholder" />,
    '-',
    <DefaultInput placeholder="placeholder" />,
    '-',
    <DefaultInput placeholder="placeholder" />,
  ],
};
