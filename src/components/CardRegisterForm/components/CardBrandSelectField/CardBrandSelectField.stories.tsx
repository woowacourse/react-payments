import type { Meta, StoryObj } from "@storybook/react";
import CardBrandSelectField from "./CardBrandSelectField";
import useInput from "@/hooks/useInput";
import { CardBrandType } from "@/constants/cardBrandType";

const meta = {
  title: "CardRegisterForm/CardBrandSelectField",
  component: CardBrandSelectField,
} satisfies Meta<typeof CardBrandSelectField>;

export default meta;

const CardBrandSelectFieldWithHook = () => {
  const cardTypeState = useInput<CardBrandType | null>({
    initialValue: null,
  });

  return <CardBrandSelectField cardBrandState={cardTypeState} />;
};

type Story = StoryObj<typeof CardBrandSelectField>;

export const Default: Story = {
  render: () => <CardBrandSelectFieldWithHook />,
};
