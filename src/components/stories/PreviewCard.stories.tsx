import type { Meta, StoryObj } from "@storybook/react";
import PreviewCardLayout from "../components/PreviewCard/PreviewCardLayout";

const meta: Meta<typeof PreviewCardLayout> = {
  title: "Example/PreviewCardLayout",
  component: PreviewCardLayout,
};

export default meta;
type Story = StoryObj<typeof PreviewCardLayout>;

export const DEFAULT: Story = {
  args: {
    cardNumbers: ["4234", "5678", "1234", "5678"],
    cardType: "default",
    cardExpirationDate: ["12", "25"],
  },
};

export const VISA: Story = {
  args: {
    cardNumbers: ["4234", "5678", "1234", "5678"],
    cardType: "visa",
    cardExpirationDate: ["12", "25"],
  },
};

export const MASTER: Story = {
  args: {
    cardNumbers: ["5034", "5678", "1234", "5678"],
    cardType: "master",
    cardExpirationDate: ["12", "25"],
  },
};
