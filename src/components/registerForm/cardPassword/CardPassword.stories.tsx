import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardPassword from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";

const cardPassword = {
  component: CardPassword,
  title: "CardPassword",
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
} satisfies Meta<typeof CardPassword>;

export default cardPassword;

type Story = StoryObj<typeof cardPassword>;

export const Example = {
  args: {},
} satisfies Story;
