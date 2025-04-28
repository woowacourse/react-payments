import type { Meta, StoryObj } from "@storybook/react";
import { withCardProviders } from "../../../.storybook/CardProviderDecorator";
import CardBrandInput from "./CardBrandInput";

const meta = {
  title: "CardBrandInput",
  component: CardBrandInput,
  tags: ["autodocs"],
} satisfies Meta<typeof CardBrandInput>;

export default meta;

type Story = StoryObj<typeof CardBrandInput>;

export const Default: Story = {
  args: {
    value: "신한카드",
    handleCardBrandChange: () => {},
  },
  decorators: [withCardProviders({})],
};
