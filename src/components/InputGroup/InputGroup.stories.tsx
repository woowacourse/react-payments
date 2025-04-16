import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { INPUT_TYPE } from "../../constants/constants";

const meta = {
  title: "InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

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
