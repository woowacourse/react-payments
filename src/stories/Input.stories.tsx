import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Form/Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

type Story = StoryObj<typeof Input>;

const Template: Story["template"] = () => (
  <Input
    index="0"
    type="text"
    placeholder="Placeholder"
    maxLength={10}
    setErrorMessage={() => {}}
    setAllInputValid={() => {}}
    setData={() => {}}
    validationRule={(value) => value.length > 0}
    errorMessageText="Error message"
  />
);

//export const Default = Template;

export const Default = Template.bind({});
Default.args = {
  type: "number",
  placeholder: "1234",
};

export const WithoutDescription = Template.bind({});
WithoutDescription.args = {
  type: "number",
};
