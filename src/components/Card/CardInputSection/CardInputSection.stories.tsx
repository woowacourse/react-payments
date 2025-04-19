import type { Meta, StoryObj } from "@storybook/react";
import { CARD_INPUT_TYPE } from "../../../constants/constants";
import CardInputSection from "./CardInputSection";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardInputSection",
  component: CardInputSection,
  tags: ["autodocs"],
} satisfies Meta<typeof CardInputSection>;

export default meta;

type Story = StoryObj<typeof CardInputSection>;

export const CardNumbers: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_INPUT_TYPE.cardNumbers,
  },
};

export const ExpirationPeriod: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_INPUT_TYPE.expirationPeriod,
  },
};

export const CvcNumber: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_INPUT_TYPE.cvcNumber,
  },
};
