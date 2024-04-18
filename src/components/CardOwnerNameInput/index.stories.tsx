import { Meta, StoryObj } from "@storybook/react";
import CardOwnerNameInput from ".";
import Caption from "../common/Caption";
import { useState } from "react";
import { fn } from "@storybook/test";

const meta = {
  title: "CardOwnerNameInput",
  component: CardOwnerNameInput,

  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story, context) => {
      const [ownerName, setOwnerName] = useState("");
      const handleCardOwnerNameChange = (value: string) => {
        setOwnerName(value);
      };

      return (
        <Story
          args={{ ...context.args, ownerName, handleCardOwnerNameChange }}
        />
      );
    },
  ],

  tags: ["autodocs"],

  args: {
    ownerName: "",
    handleCardOwnerNameChange: fn(),
  },
} satisfies Meta<typeof CardOwnerNameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorCaption: (errorText: string) => (
      <Caption text={errorText} type="error" />
    ),
  },
};
