import { Meta, StoryObj } from "@storybook/react";

import CardNumberInputField from "./CardNumberInputField";
import FormProviderDecorator from "./FormProviderDecorator";

const meta: Meta<typeof CardNumberInputField> = {
  title: "CardNumberInputField",

  component: CardNumberInputField,

  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story) => {
      return (
        <FormProviderDecorator>
          <Story />
        </FormProviderDecorator>
      );
    },
  ],

  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
