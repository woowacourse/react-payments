import { Meta, StoryObj } from "@storybook/react";

import Card from "../components/Card";
import { CardContextProvider } from "../context/CardContext";
import { DrawerContextProvider } from "../context/DrawerContext";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const EmptyCard: Story = {
  args: {
    cardNumberSet: ["", "", "", ""],
    owner: "NAME",
    expiration: "MM/YY",
    cardColor: "#f8f6f6",
    cardTitle: "",
    type: "addCard",
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

const cardState = {
  color: "#0b12d5",
  title: "SINHAN",
};

export const FilledCard: Story = {
  args: {
    cardNumberSet: ["1234", "5678", "1234", "5678"],
    owner: "EYK",
    expiration: "05/23",
    cardColor: cardState.color,
    cardTitle: cardState.title,
    type: "homepage",
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
