import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import CardCompanySelectSection from "./CardCompanySelectSection";

const meta = {
  title: "Components/CardCompanySelectSection",
  component: CardCompanySelectSection,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    onSelect: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <CardCompanySelectSection {...args} />
    </div>
  ),
} satisfies Meta<typeof CardCompanySelectSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
