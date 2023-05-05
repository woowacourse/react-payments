import type { Meta, StoryObj } from "@storybook/react";
import CardAliasInput from "components/AddCardResultPage/CardAliasInput/CardAliasInput";

const meta = {
  component: CardAliasInput,
  title: "Input",
} satisfies Meta<typeof CardAliasInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardAlias: Story = {
  args: {},
};
