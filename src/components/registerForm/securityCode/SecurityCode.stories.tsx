import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import SecurityCode from "./SecurityCode";

const securityCode = {
  component: SecurityCode,
  title: "SecurityCode",
} satisfies Meta<typeof SecurityCode>;

export default securityCode;

type Story = StoryObj<typeof securityCode>;

export const Example = {
  args: {},
} satisfies Story;
