import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SecurityCode from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";

const securityCode = {
  component: SecurityCode,
  title: "SecurityCode",
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
} satisfies Meta<typeof SecurityCode>;

export default securityCode;

type Story = StoryObj<typeof securityCode>;

export const Example = {
  args: {},
} satisfies Story;
