import { Meta, StoryObj } from "@storybook/react";

import CardPasswordInput from "../../components/payment/CardEnrollForm/CardPasswordInput";
import useCardPassword from "../../hooks/useCardPassword";

const meta: Meta<typeof CardPasswordInput> = {
  component: CardPasswordInput,
};
export default meta;

type Story = StoryObj<typeof CardPasswordInput>;

export const Default: Story = {
  render: () => {
    const cardPasswordInputProps = useCardPassword();

    return <CardPasswordInput {...cardPasswordInputProps} />;
  },
};
