import { Meta, StoryObj } from "@storybook/react";

import CardOwnerNameInput from "../../components/payment/CardEnrollForm/CardOwnerNameInput";
import useCardOwnerName from "../../hooks/useCardOwnerName";

const meta: Meta<typeof CardOwnerNameInput> = {
  component: CardOwnerNameInput,
};
export default meta;

type Story = StoryObj<typeof CardOwnerNameInput>;

export const Default: Story = {
  render: () => {
    const { cardOwnerNameInputProps } = useCardOwnerName();

    return <CardOwnerNameInput {...cardOwnerNameInputProps} />;
  },
};
