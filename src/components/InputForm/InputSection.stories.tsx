import type { Meta, StoryObj } from "@storybook/react";
import { INPUT_TYPE } from "../../constants/constants";
import InputSection from "./InputSection";
import { withCustomCardProvider } from "../../../.storybook/CardProviderDecorator";

const meta = {
  title: "InputSection",
  component: InputSection,
  tags: ["autodocs"],
} satisfies Meta<typeof InputSection>;

export default meta;

type Story = StoryObj<typeof InputSection>;

export const CardNumbers: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: INPUT_TYPE.cardNumbers,
  },
};

export const ExpirationPeriod: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: INPUT_TYPE.expirationPeriod,
  },
};

export const cvcNumber: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: INPUT_TYPE.cvcNumber,
  },
};
