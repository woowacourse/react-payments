import { Meta, StoryObj } from "@storybook/react";

import FormProviderDecorator from "./FormProviderDecorator";
import CVCNumberInputField from "./CVCNumberInputFiled";
import CardPreview from "../CardPreview/CardPreview";

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
          <CardPreview />
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
