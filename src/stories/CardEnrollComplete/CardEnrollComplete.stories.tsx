import { Meta, StoryFn, StoryObj } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";
import CardEnrollComplete from "../../components/payment/CardEnrollComplete";

const withBrowserRouter = (Story: StoryFn) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

const meta: Meta = {
  component: CardEnrollComplete,
  decorators: [withBrowserRouter],
};

export default meta;

type Story = StoryObj<typeof CardEnrollComplete>;

export const Default: Story = {};
