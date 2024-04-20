import { Meta, StoryObj } from "@storybook/react";
import Caption from "../common/Caption";
import { useState } from "react";
import { fn } from "@storybook/test";
import ExpirationDateInput from ".";

const meta = {
  title: "ExpirationDateInput",
  component: ExpirationDateInput,

  parameters: {
    layout: "centered",
  },

  decorators: [
    (Story, context) => {
      const [expirationDate, setExpirationDate] = useState(["", ""]);
      const handleExpirationDateChange = (index: number, value: string) => {
        setExpirationDate((prevDate) => {
          const updatedExpirationDate = [...prevDate];
          updatedExpirationDate[index] = value;

          return updatedExpirationDate;
        });
      };

      return (
        <Story
          args={{
            ...context.args,
            expirationDate,
            onExpirationDateChange: handleExpirationDateChange,
          }}
        />
      );
    },
  ],

  tags: ["autodocs"],

  args: {
    expirationDate: ["", ""],
    onExpirationDateChange: fn(),
  },
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    errorCaption: (errorText: string) => (
      <Caption text={errorText} type="error" />
    ),
  },
};
