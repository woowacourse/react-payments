import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import CardEnrollForm from "../../components/payment/CardEnrollForm";

const withBrowserRouter = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

const meta: Meta<typeof CardEnrollForm> = {
  component: CardEnrollForm,
  decorators: [withBrowserRouter],
};
export default meta;

type Story = StoryObj<typeof CardEnrollForm>;

export const Default: Story = {};
