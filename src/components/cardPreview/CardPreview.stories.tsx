import type { Meta, StoryObj } from "@storybook/react-vite";
import CardPreview from "./CardPreview";

const meta: Meta<typeof CardPreview> = {
  title: "Components/CardPreview",
  component: CardPreview,
};

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumber: ["1234", "1234", "1234", "1234"],
    expireDate: ["11", "11"],
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};
