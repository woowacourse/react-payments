import { Meta, StoryObj } from "@storybook/react";

import ExpirationDateInputField from "./ExpirationDateInputField";
import FormProviderDecorator from "./FormProviderDecorator";

const meta = {
  title: "ExpirationDateInput",
  component: ExpirationDateInputField,

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
} satisfies Meta<typeof ExpirationDateInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
