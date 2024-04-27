import { Meta, StoryObj } from "@storybook/react";

import CardNumbersInput from "../../components/payment/CardEnrollForm/CardNumbersInput";
import useCardNumbers from "../../hooks/useCardNumbers";

const meta: Meta<typeof CardNumbersInput> = {
  component: CardNumbersInput,
};
export default meta;

type Story = StoryObj<typeof CardNumbersInput>;

export const Default: Story = {
  render: () => {
    const { cardNumbersInputProps } = useCardNumbers();

    return <CardNumbersInput {...cardNumbersInputProps} />;
  },
};
