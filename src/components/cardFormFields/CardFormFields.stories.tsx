import type { Meta, StoryObj } from "@storybook/react-vite";
import CardFormFields from "./CardFormFields";
import { useCardForm } from "../useCardForm";
import { useCardStep } from "./useCardStep";

const meta: Meta<typeof CardFormFields> = {
  title: "Components/CardFormFields",
  component: CardFormFields,
};

export default meta;

type Story = StoryObj<typeof CardFormFields>;

export const Default: Story = {
  render: () => {
    const cardForm = useCardForm();
    const step = useCardStep(cardForm);
    return <CardFormFields cardForm={cardForm} step={step} />;
  },
};
