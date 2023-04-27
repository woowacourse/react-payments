import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import OwnerNameInput from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";

const ownerNameInput = {
  component: OwnerNameInput,
  title: "OwnerNameInput",
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
} satisfies Meta<typeof OwnerNameInput>;

export default ownerNameInput;

type Story = StoryObj<typeof ownerNameInput>;

export const Example = {
  args: {},
} satisfies Story;
