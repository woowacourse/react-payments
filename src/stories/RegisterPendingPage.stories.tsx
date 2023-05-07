import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import RegisterPendingPage from "../component/RegisterPendingPage/RegisterPendingPage";

type Story = StoryObj<typeof RegisterPendingPage>;

const meta: Meta  = {
  title: "Register Pending Page",
  component: RegisterPendingPage,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

export const Default: Story = {};
