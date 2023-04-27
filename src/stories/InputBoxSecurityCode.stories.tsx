import type { Meta, StoryObj } from "@storybook/react";

import InputBoxSecurityCode from "../component/CardInputPage/InputBoxSecurityCode/InputBoxSecurityCode";

type Story = StoryObj<typeof InputBoxSecurityCode>;

const meta: Meta = {
  title: "Security Code Input Box",
  component: InputBoxSecurityCode,
  argTypes: {
    setIsComplete: { action: "Is input complete?" },
  },
};

export default meta;

export const Input: Story = {};
