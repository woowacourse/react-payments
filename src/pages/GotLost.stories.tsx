import { Meta, StoryObj } from "@storybook/react";
import GotLostPage from "./GotLost";
import { BrowserRouter } from "react-router-dom";

const meta = {
  component: GotLostPage,
  title: "Pages/GotLost",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof GotLostPage>;

export default meta;

type Story = StoryObj<typeof GotLostPage>;

export const GotLost: Story = {
  args: {},
};
