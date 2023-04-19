import { Meta, StoryObj } from "@storybook/react";
import CardNumberInput from "../components/CardNumberInput";
import InputField from "../components/InputField";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "InputField",
};

export default meta;
type Story = StoryObj<typeof InputField>;

//title,cardNumberSet,owner,expiracy
export const CardNumber: Story = {
  args: {
    kind: "cardNumber",
    children: <CardNumberInput />,
  },
};
