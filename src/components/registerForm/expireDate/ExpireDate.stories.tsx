import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import ExpireDate from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";

const expireDate = {
  component: ExpireDate,
  title: "ExpireDate Input",
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
} satisfies Meta<typeof ExpireDate>;

export default expireDate;

type Story = StoryObj<typeof expireDate>;

export const Example = {
  args: {},
} satisfies Story;
