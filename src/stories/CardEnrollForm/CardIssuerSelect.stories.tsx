import { Meta, StoryObj } from "@storybook/react";

import CardIssuerSelect from "../../components/payment/CardEnrollForm/CardIssuerSelect";
import useCardIssuer from "../../hooks/useCardIssuer";

const meta: Meta<typeof CardIssuerSelect> = {
  component: CardIssuerSelect,
};
export default meta;

type Story = StoryObj<typeof CardIssuerSelect>;

export const Default: Story = {
  render: () => {
    const { cardIssuerSelectProps } = useCardIssuer();

    return <CardIssuerSelect {...cardIssuerSelectProps} />;
  },
};
