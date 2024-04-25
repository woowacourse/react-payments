import FormSubmitButton, {
  FormSubmitButtonProps,
} from "../components/FormSubmitButton";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Components/FormSubmitButton",
  component: FormSubmitButton,
} as Meta;

const Template: Story<FormSubmitButtonProps> = (args) => (
  <FormSubmitButton {...args} />
);

export const Enabled = Template.bind({});
Enabled.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
