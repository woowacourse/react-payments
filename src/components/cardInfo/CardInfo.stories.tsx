import type { Meta, StoryObj } from "@storybook/react-vite";
import CardInfo from "./CardInfo";
import { useCardForm } from "../useCardForm";

const meta: Meta<typeof CardInfo> = {
  title: "Components/CardInfo",
  component: CardInfo,
};

export default meta;

type Story = StoryObj<typeof CardInfo>;

export const Default: Story = {
  render: () => {
    const cardForm = useCardForm();
    return <CardInfo cardForm={cardForm} />;
  },
};
