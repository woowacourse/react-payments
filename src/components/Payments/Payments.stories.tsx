import type { Meta, StoryObj } from "@storybook/react";
import Payments from "./Payments";
import { withCustomCardProvider } from "../../utils/storybook/CardProviderDecorator";

const meta = {
  title: "Payments",
  component: Payments,
  tags: ["autodocs"],
} satisfies Meta<typeof Payments>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [withCustomCardProvider({})],
};
