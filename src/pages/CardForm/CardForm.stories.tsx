import type { Meta, StoryObj } from "@storybook/react";
import CardForm from "./CardForm";
import { withCustomCardProvider } from "../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardForm",
  component: CardForm,
  tags: ["autodocs"],
} satisfies Meta<typeof CardForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
};
