import { Meta, StoryObj } from "@storybook/react";

import FormProviderDecorator from "./FormProviderDecorator";
import CVCNumberInputField from "./CVCNumberInputFiled";

const meta = {
  title: "CVCNumberInputField",

  component: CVCNumberInputField,

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
} satisfies Meta<typeof CVCNumberInputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
