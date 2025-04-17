import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationDate from "../../CardExpirationDate/CardExpirationDate";

const meta: Meta<typeof CardExpirationDate> = {
  title: "Example/CardExpirationDate",
  component: CardExpirationDate,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDate>;

export const Primary: Story = {
  args: {
    handleChange: () => {},
    cardExpirationDate: ["", ""],
    errorMessage: ["", ""],
  },
};

export const Error: Story = {
  args: {
    handleChange: () => {},
    cardExpirationDate: ["dd", ""],
    errorMessage: ["숫자만 입력 가능합니다.", ""],
  },
};
