import type { Meta, StoryObj } from "@storybook/react";
import InputBoxOwner from "../component/CardInputPage/InputBoxOwner/InputBoxOwner";
import { CreditCardProvider } from "../context/CreditCardContext";

type Story = StoryObj<typeof InputBoxOwner>;

const meta: Meta = {
  title: "Input Box Owner",
  component: InputBoxOwner,
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
