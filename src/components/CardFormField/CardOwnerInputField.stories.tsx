import { Meta, StoryObj } from "@storybook/react";

import FormProviderDecorator from "./FormProviderDecorator";
import CardOwnerInputField from "./CardOwnerInputField";

const meta = {
  title: "CardOwnerInputField",

  component: CardOwnerInputField,

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
} satisfies Meta<typeof CardOwnerInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
