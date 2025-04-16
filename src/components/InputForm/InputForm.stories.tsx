import type { Meta, StoryObj } from "@storybook/react";
import { INPUT_TYPE } from "../../constants/constants";
import InputForm from "./InputForm";

const meta = {
  title: "InputForm",
  component: InputForm,
  tags: ["autodocs"],
} satisfies Meta<typeof InputForm>;

export default meta;

type Story = StoryObj<typeof InputForm>;

export const CardNumbers: Story = {
  args: {
    type: INPUT_TYPE.cardNumbers,
  },
};

export const ExpirationPeriod: Story = {
  args: {
    type: INPUT_TYPE.expirationPeriod,
  },
};
export const cvcNumber: Story = {
  args: {
    type: INPUT_TYPE.cvcNumber,
  },
};
