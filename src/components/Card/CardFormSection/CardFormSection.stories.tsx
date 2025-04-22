import type { Meta, StoryObj } from "@storybook/react";
import { CARD_FORM_TYPE } from "../../../constants/constants";
import CardFormSection from "./CardFormSection";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardFormSection",
  component: CardFormSection,
  tags: ["autodocs"],
} satisfies Meta<typeof CardFormSection>;

export default meta;

type Story = StoryObj<typeof CardFormSection>;

export const CardNumbers: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_FORM_TYPE.cardNumbers,
  },
};

export const ExpirationPeriod: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_FORM_TYPE.expirationPeriod,
  },
};

export const CvcNumber: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_FORM_TYPE.cvcNumber,
  },
};

export const CardCompany: Story = {
  decorators: [withCustomCardProvider({})],
  args: {
    type: CARD_FORM_TYPE.cardCompany,
  },
};
