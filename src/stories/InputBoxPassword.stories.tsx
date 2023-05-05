import type { Meta, StoryObj } from "@storybook/react";

import InputBoxPassword from "../component/CardInputPage/InputBoxPassword/InputBoxPassword";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof InputBoxPassword>;

const meta: Meta = {
  title: "Password Input Box",
  component: InputBoxPassword,
  argTypes: {
    setIsComplete: { action: "Is input Complete?" },
  },
  decorators: [
    (Story) => (
      <CreditCardProvider>
        <Story />
      </CreditCardProvider>
    ),
  ],
};

export default meta;

export const Input: Story = {};
