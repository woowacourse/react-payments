import { Meta, StoryObj } from "@storybook/react";
import InputField from "../../components/common/InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "InputField",
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const CardNumber: Story = {
  args: {
    kind: "cardNumber",
  },
};

export const Expiracy: Story = {
  args: {
    kind: "expiracy",
  },
};

export const Owner: Story = {
  args: {
    kind: "owner",
    inputLength: "0/30",
  },
};

export const Cvc: Story = {
  args: {
    kind: "cvc",
  },
};

export const Password: Story = {
  args: {
    kind: "password",
  },
};
