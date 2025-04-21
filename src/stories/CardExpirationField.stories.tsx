import type { Meta } from "@storybook/react";
import CardExpirationField from "../components/CardExpirationField";
import useCardInfo from "../hooks/useCardInfo";

const meta = {
  title: "CardExpirationField",
  component: CardExpirationField,
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpirationField>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <CardExpirationField
      cardInfo={cardInfo}
      handleCardInfo={handleCardInfo}
      maxLength={2}
    />
  );
};
