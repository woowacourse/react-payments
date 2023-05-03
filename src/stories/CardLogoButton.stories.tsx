import { Meta, StoryObj } from "@storybook/react";

import CardLogo from "../components/CardLogo";
import { CardContextProvider } from "../context/CardContext";
import { DrawerContextProvider } from "../context/DrawerContext";
import { CARD_COMPANYS } from "../constant";

const meta: Meta<typeof CardLogo> = {
  component: CardLogo,
  title: "Button",
};

export default meta;
type Story = StoryObj<typeof CardLogo>;

export const CardLogoIcon: Story = {
  args: {
    cardName: "BC",
  },

  decorators: [
    (Story) => (
      <CardContextProvider>
        <DrawerContextProvider>
          <Story />
        </DrawerContextProvider>
      </CardContextProvider>
    ),
  ],
};

CardLogoIcon.argTypes = {
  cardName: {
    options: [...Object.keys(CARD_COMPANYS)],
    control: { type: "select" },
  },
};
