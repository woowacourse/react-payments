import type { Meta, StoryObj } from "@storybook/react";
import CardTypeSelectField from "./CardTypeSelectField";
import useInput from "@/hooks/useInput";
import { CardType } from "@/constants/cardType";

const meta = {
  title: "CardTypeSelectField",
  component: CardTypeSelectField,
} satisfies Meta<typeof CardTypeSelectField>;

export default meta;

const CardTypeSelectFieldWithHook = () => {
  const cardTypeState = useInput<CardType | null>({
    initialValue: null,
  });

  return <CardTypeSelectField cardTypeState={cardTypeState} />;
};

type Story = StoryObj<typeof CardTypeSelectField>;

export const Default: Story = {
  render: () => <CardTypeSelectFieldWithHook />,
};
