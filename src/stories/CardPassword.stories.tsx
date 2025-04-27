import type { Meta, StoryObj } from "@storybook/react";
import CardPassword from "../pages/CardFormPage/CardPassword/CardPassword";

const meta: Meta<typeof CardPassword> = {
  title: "Example/CardPassword",
  component: CardPassword,
};

export default meta;
type Story = StoryObj<typeof CardPassword>;

export const Primary: Story = {
  args: {
    handleChange: () => {},
    handleStep: () => {},
    step: 4,
    password: "12",
    errorMessage: "",
  },
};

export const Error: Story = {
  args: {
    handleChange: () => {},
    handleStep: () => {},
    step: 4,
    password: "ㅇㅇ",
    errorMessage: "숫자만 입력 가능합니다.",
  },
};
