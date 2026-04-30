import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPreview from "./CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  render: () => {
    return <CardPreview></CardPreview>;
  },
};
