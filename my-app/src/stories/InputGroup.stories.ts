import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "../components/inputGroup";

const meta = {
  title: "Components/inputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  argTypes: {
    count: {
      control: { type: "number" },
      options: [4, 2, 1],
      description: "숫자 차이 입니다",
    },
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Card: Story = {
  args: {
    count: 4,
  },
};

export const Expiration: Story = {
  args: {
    count: 2,
  },
};

export const CVC: Story = {
  args: {
    count: 1,
  },
};
