import { Meta, StoryObj } from "@storybook/react";

import CardCompanySelectField from "./CardCompanySelectField";
import FormProviderDecorator from "./FormProviderDecorator";
import CardPreview from "../CardPreview/CardPreview";

const meta = {
  title: "CardCompanySelectField",

  component: CardCompanySelectField,

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
} satisfies Meta<typeof CardCompanySelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
