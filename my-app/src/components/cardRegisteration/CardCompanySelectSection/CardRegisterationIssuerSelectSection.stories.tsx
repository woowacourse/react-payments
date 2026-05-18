import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import CardRegisterationIssuerSelectSection from "./CardRegisterationIssuerSelectSection";

const meta = {
  title: "Components/CardRegisteration/CardRegisterationIssuerSelectSection",
  component: CardRegisterationIssuerSelectSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onSelect: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <CardRegisterationIssuerSelectSection {...args} />
    </div>
  ),
} satisfies Meta<typeof CardRegisterationIssuerSelectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
