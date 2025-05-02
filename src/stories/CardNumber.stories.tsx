import type { Meta, StoryObj } from "@storybook/react";
import CardNumber from "../pages/CardFormPage/CardNumberInput/CardNumberInput";

const meta: Meta<typeof CardNumber> = {
  title: "Example/CardNumber",
  component: CardNumber,
};

export default meta;
type Story = StoryObj<typeof CardNumber>;

const cardNumbers = {
  FIRST: "1234",
  SECOND: "5678",
  THIRD: "1234",
  FOURTH: "",
};

const errorMessage = {
  FIRST: "",
  SECOND: "",
  THIRD: "",
  FOURTH: "",
};

export const Primary: Story = {
  args: {
    handleChange: () => {},
    handleStep: () => {},
    step: 1,
    cardNumbers,
    errorMessage,
  },
};

export const Error: Story = {
  args: {
    handleChange: () => {},
    handleStep: () => {},
    step: 1,
    cardNumbers: {
      FIRST: "ddddd",
      SECOND: "",
      THIRD: "",
      FOURTH: "",
    },
    errorMessage: {
      FIRST: "숫자만 입력 가능합니다.",
      SECOND: "",
      THIRD: "",
      FOURTH: "",
    },
  },
};
