import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPreview from "./CardPreview";
import { useCardForm } from "../useCardForm";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

const buildCardForm = (overrides: {
  cardNumber?: string[];
  expireDate?: string[];
  cardBrand?: string;
}): ReturnType<typeof useCardForm> =>
  ({
    cardNumber: { value: overrides.cardNumber ?? ["", "", "", ""], set: () => {} },
    expireDate: { value: overrides.expireDate ?? ["", ""], set: () => {} },
    cvc: { value: "", set: () => {} },
    cardBrand: { value: overrides.cardBrand ?? "", set: () => {} },
    cardPassword: { value: "", set: () => {} },
  } as ReturnType<typeof useCardForm>);

export const Default: Story = {
  render: () => (
    <CardPreview
      cardForm={buildCardForm({
        cardNumber: ["1234", "1234", "1234", "1234"],
        expireDate: ["11", "11"],
      })}
    />
  ),
};
