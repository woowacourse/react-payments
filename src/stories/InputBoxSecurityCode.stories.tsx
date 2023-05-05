import type { Meta, StoryObj } from "@storybook/react";

import InputBoxSecurityCode from "../component/CardInputPage/InputBoxSecurityCode/InputBoxSecurityCode";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof InputBoxSecurityCode>;

const meta: Meta = {
  title: "Security Code Input Box",
  component: InputBoxSecurityCode,
  argTypes: {
    setIsComplete: { action: "Is input complete?" },
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
