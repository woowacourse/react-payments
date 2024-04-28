import { Meta, StoryObj } from "@storybook/react";
import ExpirationDateForm from "../components/Form/ExpirationDateForm";

const meta = {
  title: "ExpirationDateForm",
  component: ExpirationDateForm,
} satisfies Meta<typeof ExpirationDateForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelContent: "유효기간",
    inputCount: 2,
    type: "text",
    placeholders: ["MM", "YY"],
    onValidation: () => {},
    onFocus: () => {},
    setFocusedField: () => {},
  },
};
