import { Meta, StoryObj } from "@storybook/react";

import CardExpirationDateInput from "../../components/payment/CardEnrollForm/CardExpirationDateInput";
import useCardExpiration from "../../hooks/useCardExpiration";

const meta: Meta<typeof CardExpirationDateInput> = {
  component: CardExpirationDateInput,
};
export default meta;

type Story = StoryObj<typeof CardExpirationDateInput>;

export const Default: Story = {
  render: () => {
    const { cardExpirationDateInputProps } = useCardExpiration();

    return <CardExpirationDateInput {...cardExpirationDateInputProps} />;
  },
};
