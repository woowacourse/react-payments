import { Meta, Story } from "@storybook/react";
import Select, { SelectProps } from "../components/common/Select";

export default {
  title: "Components/Select",
  component: Select,
} as Meta;

const Template: Story<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "visa", label: "Visa" },
    { value: "mastercard", label: "MasterCard" },
    { value: "amex", label: "American Express" },
  ],
  onChange: (event) => console.log(event.target.value),
};
