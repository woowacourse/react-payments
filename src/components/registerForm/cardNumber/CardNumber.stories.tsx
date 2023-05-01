import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardNumber from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";

const cardNumber = {
  component: CardNumber,
  title: "Card Number Input",
  decorators: [
    (Story) => {
      return (
        <CardInfoProvider>
          <div style={{ width: "375px", margin: "0 auto" }}>
            <Story />
          </div>
        </CardInfoProvider>
      );
    },
  ],
  argTypes: {
    CardInfoProvider: {
      type: "function",
    },
    CardNumber: {
      option: "string",
    },
  },
} satisfies Meta<typeof CardNumber>;

export default cardNumber;

type Story = StoryObj<typeof cardNumber>;

export const Example = {
  args: {},
} satisfies Story;
