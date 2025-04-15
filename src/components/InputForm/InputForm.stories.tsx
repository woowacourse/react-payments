import type { Meta, StoryObj } from "@storybook/react";
import { INPUT_TYPE } from "../../constants/constants";
import InputForm from "./InputForm";

const meta = {
  title: "InputForm",
  component: InputForm,
} satisfies Meta<typeof InputForm>;

export default meta;

type Story = StoryObj<typeof InputForm>;

export const CardNumber: Story = {
  args: {
    type: INPUT_TYPE.cardNumber,
  },
};

export const ExpirationPeriod: Story = {
  args: {
    type: INPUT_TYPE.expirationPeriod,
  },
};
export const CVCNumber: Story = {
  args: {
    type: INPUT_TYPE.cvcNumber,
  },
};
