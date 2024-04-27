import { Meta, StoryObj } from "@storybook/react";

import CardCvcInput from "../../components/payment/CardEnrollForm/CardCvcInput";
import useCardCvc from "../../hooks/useCardCvc";

const meta: Meta<typeof CardCvcInput> = {
  component: CardCvcInput,
};
export default meta;

type Story = StoryObj<typeof CardCvcInput>;

export const Default: Story = {
  render: () => {
    const { cardCvcInputProps } = useCardCvc();

    return <CardCvcInput {...cardCvcInputProps} />;
  },
};
