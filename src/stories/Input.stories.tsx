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
    index: 0,
    type: "text",
    placeholder: "1234",
    maxLength: 10,
    setErrorMessage: () => {},
    setAllInputValid: () => {},
    state: [],
    setState: () => {},
    validationRule: (value) => /^[0-9]{4}$/.test(value),
    errorMessageText: "4자리의 숫자를 입력하세요.",
    onFocus: () => {},
  },
};
