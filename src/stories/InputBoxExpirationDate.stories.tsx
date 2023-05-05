import type { Meta, StoryObj } from "@storybook/react";

import InputBoxExpirationDate from "../component/CardInputPage/InputBoxExpirationDate/InputBoxExpirationDate";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof InputBoxExpirationDate>;

const meta: Meta = {
  title: "Expiration Date Input Box",
  component: InputBoxExpirationDate,
  argTypes: {
    setIsComplete: { action: 'Is input complete?' },
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

export const InputTest: Story = {};
