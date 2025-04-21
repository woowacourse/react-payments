import type { Meta } from "@storybook/react";
import CardNumberField from "../components/CardNumberField";
import useCardInfo from "../hooks/useCardInfo";

const meta = {
  title: "CardNumberField",
  component: CardNumberField,
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberField>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <CardNumberField
      cardInfo={cardInfo}
      handleCardInfo={handleCardInfo}
      maxLength={4}
    />
  );
};
