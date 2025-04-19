import type { Meta, StoryObj } from "@storybook/react";
import CardPaymentsPage from "./CardPaymentsPage";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardPaymentsPage",
  component: CardPaymentsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof CardPaymentsPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
};
