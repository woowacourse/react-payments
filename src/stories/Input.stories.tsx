
import {Meta, Story} from "@storybook/react";

import Input, { InputProps } from '../components/Input';

export default {
  component: Input,
  title: 'Input',
} as Meta

const Template:Story<InputProps>= (args) => <Input {...args} />;

export const TextInput = Template.bind({});
export const NumberInput = Template.bind({});
export const PasswordInput = Template.bind({});

TextInput.args = {
  kind: "text",
  placeholder:""
};

NumberInput.args = {
  kind: "number",
  placeholder:"MM",
}

PasswordInput.args = {
  kind: "password",
  placeholder:""
}
