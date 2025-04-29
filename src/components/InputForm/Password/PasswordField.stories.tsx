import type { Meta } from "@storybook/react";
import PasswordField from "./PasswordField";
import useCardInfo from "../../../hooks/useCardInfo";

const meta = {
  title: "PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordField>;

export default meta;

export const Default = () => {
  const { cardInfo, handleCardInfo } = useCardInfo();

  return (
    <PasswordField
      cardInfo={cardInfo}
      handleCardInfo={handleCardInfo}
      maxLength={2}
    />
  );
};
