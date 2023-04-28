import type { Meta, StoryObj } from "@storybook/react";

import InputBoxCardNumber from "../component/CardInputPage/InputBoxCardNumber/InputBoxCardNumber";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof InputBoxCardNumber>;

const meta: Meta = {
  title: "Card Number Input Box",
  component: InputBoxCardNumber,
  argTypes: {
    setIsComplete: { action: "Is all four inputs complete?" },
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
