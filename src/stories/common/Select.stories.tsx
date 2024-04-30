import { Meta, StoryObj } from "@storybook/react";
import Select, { SelectProps } from "../../components/common/Select";

const meta: Meta<typeof Select> = {
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

const args: SelectProps = {
  options: [
    { value: "visa", label: "Visa" },
    { value: "mastercard", label: "MasterCard" },
    { value: "amex", label: "American Express" },
  ],
  placeholder: "story test!!",
  isError: false,
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) =>
    console.log(event.target.value),
};

export const Default: Story = { args };
