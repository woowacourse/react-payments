import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardRegisterForm from ".";
import { withRouter } from "storybook-addon-react-router-v6";
import { CardInfoProvider } from "src/context/CardInfoContext";

const cardRegister = {
  component: CardRegisterForm,
  title: "CardRegisterForm Input",
  decorators: [
    withRouter,
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
  parameters: {
    reactRouter: {
      routePath: "/card-register",
    },
  },
} satisfies Meta<typeof CardRegisterForm>;

export default cardRegister;

type Story = StoryObj<typeof cardRegister>;

export const Example = {
  args: {},
} satisfies Story;
