import type { Meta } from "@storybook/react";
import CardBrandField from "./CardBrandField";
import useCardInfo from "../../../hooks/useCardInfo";

const meta = {
  title: "CardBrandField",
  component: CardBrandField,
  tags: ["autodocs"],
} satisfies Meta<typeof CardBrandField>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return <CardBrandField cardInfo={cardInfo} handleCardInfo={handleCardInfo} />;
};
