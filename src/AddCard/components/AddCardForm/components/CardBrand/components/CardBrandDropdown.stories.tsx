import type { Meta, StoryObj } from "@storybook/react";
import CardBrandDropdown from "./CardBrandDropdown";

const meta = {
  title: "Components/AddCard/CardBrandDropdown",
  component: CardBrandDropdown,
  tags: ["autodocs"],
  args: {
    selectedBrand: null,
    setSelectedBrand: () => {},
  },
} satisfies Meta<typeof CardBrandDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedBrand: "카카오뱅크",
  },
};
