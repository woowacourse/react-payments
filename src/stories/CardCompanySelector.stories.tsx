import type { Meta, StoryObj } from "@storybook/react-vite";

import CardCompanySelector from "@components/CardCompanySelector/CardCompanySelector";

const meta = {
  title: "CardCompanySelector",
  component: CardCompanySelector,
} satisfies Meta<typeof CardCompanySelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
