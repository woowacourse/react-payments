import type { Meta, StoryObj } from "@storybook/react";

import CardNumber from "../component/CardInputPage/InputBoxCardNumber/CardNumber";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof CardNumber>;

const meta: Meta = {
  title: "Card Number Input",
  component: CardNumber,  
  decorators: [
    (Story) => (
      <CreditCardProvider>
        <Story />
      </CreditCardProvider>
    ),
  ],
};

export default meta;

export const Input: Story = {
  args: {
    setHasError: () => {},
    setIsComplete: () => {},
  }
};