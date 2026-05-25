import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, within } from "storybook/test";
import CardListItem from "./CardListItem";

const meta = {
  title: "Components/CardListItem",
  component: CardListItem,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    issuerCode: "신한카드",
    number: "4123 4567 8901 2345",
    expirationDate: "12/26",
    onDelete: fn(),
  },
  render: (args) => (
    <div style={{ width: 320 }}>
      <CardListItem {...args} />
    </div>
  ),
} satisfies Meta<typeof CardListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const BCCard: Story = {
  args: {
    issuerCode: "BC카드",
    number: "5123 4567 8901 2345",
    expirationDate: "06/27",
  },
};

export const KakaoBank: Story = {
  args: {
    issuerCode: "카카오뱅크",
    number: "1234 5678 9012 3456",
    expirationDate: "03/28",
  },
};

export const DeleteClick: Story = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button"));
    await expect(args.onDelete).toHaveBeenCalledOnce();
  },
};
