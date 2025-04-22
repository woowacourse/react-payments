import type { Meta } from "@storybook/react";
import CardCVCField from "./CardCVCField";
import useCardInfo from "../../../hooks/useCardInfo";

const meta = {
  title: "CardCVCField",
  component: CardCVCField,
  tags: ["autodocs"],
} satisfies Meta<typeof CardCVCField>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <CardCVCField
      cardInfo={cardInfo}
      handleCardInfo={handleCardInfo}
      maxLength={3}
    />
  );
};
