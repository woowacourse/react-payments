import type { Meta, StoryObj } from "@storybook/react";

import InputBoxCardNumber from "../component/CardInputPage/InputBoxCardNumber/InputBoxCardNumber";

type Story = StoryObj<typeof InputBoxCardNumber>;

const meta: Meta = {
  title: "Card Number Input Box",
  component: InputBoxCardNumber,
  argTypes: {
    setIsComplete: { action: "Is all four inputs complete?" },
  }
};

export default meta;

export const Input: Story = {
  args: {
    setPreviewDataHandler: () => {},
  },
};
