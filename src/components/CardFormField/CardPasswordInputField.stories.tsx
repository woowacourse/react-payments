import { Meta, StoryObj } from "@storybook/react";

import FormProviderDecorator from "./FormProviderDecorator";
import CardPasswordInputField from "./CardPasswordInputField";

const meta = {
  title: "CardPasswordInputFiled",

  component: CardPasswordInputField,

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
} satisfies Meta<typeof CardPasswordInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
