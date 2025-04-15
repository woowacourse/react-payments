import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { INPUT_TYPE } from "../../constants/constants";

const meta = {
  title: "InputGroup",
  component: InputGroup,
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

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
