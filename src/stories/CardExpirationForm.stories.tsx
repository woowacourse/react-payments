import type { Meta } from "@storybook/react";
import CardExpirationForm from "../components/CardExpirationForm";
import useCardInfo from "../hooks/useCardInfo";

const meta = {
  title: "CardExpirationForm",
  component: CardExpirationForm,
  tags: ["autodocs"],
} satisfies Meta<typeof CardExpirationForm>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <CardExpirationForm
      cardInfo={cardInfo}
      handleCardInfo={handleCardInfo}
      maxLength={2}
    />
  );
};
