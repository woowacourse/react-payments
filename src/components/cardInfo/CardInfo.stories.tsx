import type { Meta, StoryObj } from "@storybook/react-vite";
import CardInfo from "./CardInfo";
import { useCardForm } from "../useCardForm";
import { useCardStep } from "./useCardStep";

const meta: Meta<typeof CardInfo> = {
  title: "Components/CardInfo",
  component: CardInfo,
};

export default meta;

type Story = StoryObj<typeof CardInfo>;

export const Default: Story = {
  render: () => {
    const cardForm = useCardForm();
    const step = useCardStep(cardForm);
    return <CardInfo cardForm={cardForm} step={step} />;
  },
};
