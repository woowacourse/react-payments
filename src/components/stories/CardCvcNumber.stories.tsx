import type { Meta, StoryObj } from "@storybook/react";
import CardCvcNumber from "../CardCvcNumber/CardCvcNumber";

const meta: Meta<typeof CardCvcNumber> = {
  title: "Example/CardCvcNumber",
  component: CardCvcNumber,
};

export default meta;
type Story = StoryObj<typeof CardCvcNumber>;

export const Primary: Story = {
  args: {
    handleChange: () => {},
    cvcNumbers: "",
    errorMessage: "",
  },
};
export const Error: Story = {
  args: {
    handleChange: () => {},
    cvcNumbers: "abc",
    errorMessage: "숫자만 입력 가능합니다.",
  },
};
