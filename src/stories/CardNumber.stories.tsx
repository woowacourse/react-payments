import type { Meta, StoryObj } from "@storybook/react";

import CardNumber from "../component/CardInputPage/InputBoxCardNumber/CardNumber";

type Story = StoryObj<typeof CardNumber>;

const meta: Meta = {
  title: "Card Number Input",
  component: CardNumber,
};

export default meta;

export const Input: Story = {
  args: {
    setError: () => {},
    setIsComplete: () => {},
    setPreviewDataHandler: () => {},
  }
};