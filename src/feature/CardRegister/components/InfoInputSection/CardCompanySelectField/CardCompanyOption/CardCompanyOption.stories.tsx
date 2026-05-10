import type { Meta, StoryObj } from "@storybook/react-vite";

import CardCompanyOption from "./CardCompanyOption";

const meta = {
  title: "feature/CardRegister/components/CardCompanyOption",
  component: CardCompanyOption,
  tags: ["autodocs"],
  args: {
    cardCompany: "신한카드",
  },
  decorators: [
    (Story) => (
      <select defaultValue="신한카드">
        <Story />
      </select>
    ),
  ],
} satisfies Meta<typeof CardCompanyOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
