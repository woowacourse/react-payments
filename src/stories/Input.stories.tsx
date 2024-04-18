import { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Form/Input";

const meta = {
  title: "Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: "0",
    type: "text",
    placeholder: "Placeholder",
    maxLength: 10,
    setErrorMessage: () => {},
    setAllInputValid: () => {},
    setData: () => {},
    validationRule: (value) => value.length > 0,
    errorMessageText: "Error message",
  },
};
