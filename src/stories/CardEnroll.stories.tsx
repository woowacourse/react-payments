import { Meta, StoryObj } from "@storybook/react";
import CardEnroll from "../components/CardEnroll/CardEnroll";

const meta: Meta<typeof CardEnroll> = {
  component: CardEnroll,
};

export default meta;
type Story = StoryObj<typeof CardEnroll>;

export const Default: Story = {
  render: () => {
    return <CardEnroll />;
  },
};
