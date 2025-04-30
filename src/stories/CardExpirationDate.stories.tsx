import type { Meta, StoryObj } from "@storybook/react";
import CardExpirationDate from "../pages/CardFormPage/CardExpirationDateInput/CardExpirationDateInput";

const meta: Meta<typeof CardExpirationDate> = {
  title: "Example/CardExpirationDate",
  component: CardExpirationDate,
};

export default meta;
type Story = StoryObj<typeof CardExpirationDate>;

const cardExpirationDate = {
  MONTH: "12",
  YEAR: "29",
};

const errorMessage = {
  MONTH: "",
  YEAR: "",
};

export const Primary: Story = {
  args: {
    handleChange: () => {},
    handleStep: () => {},
    step: 2,
    cardExpirationDate,
    errorMessage,
  },
};

export const Error: Story = {
  args: {
    handleChange: () => {},
    handleStep: () => {},
    step: 2,
    cardExpirationDate: {
      MONTH: "dd",
      YEAR: "",
    },
    errorMessage: {
      MONTH: "숫자만 입력 가능합니다.",
      YEAR: "",
    },
  },
};
