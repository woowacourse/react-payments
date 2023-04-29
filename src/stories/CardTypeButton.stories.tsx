import { Meta, StoryObj } from "@storybook/react";

import CardLogo from "../components/CardLogo";

const meta: Meta<typeof CardLogo> = {
  component: CardLogo,
  title: "CardLogo",
};

export default meta;
type Story = StoryObj<typeof CardLogo>;

export const CardType: Story = {
  args: {
    // onClick: () => {},
    cardName: "BC",
  },
};
