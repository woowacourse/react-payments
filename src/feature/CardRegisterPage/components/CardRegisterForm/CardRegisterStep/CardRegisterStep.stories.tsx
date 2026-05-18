import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "../shared/Input/Input";
import CardRegisterStep from "./CardRegisterStep";

const meta = {
  title: "feature/CardRegister/components/CardRegisterForm/CardRegisterStep",
  component: CardRegisterStep,
  tags: ["autodocs"],
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    children: <Input value="" placeholder="1234" readOnly />,
  },
} satisfies Meta<typeof CardRegisterStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithDescription: Story = {};

export const WithoutDescription: Story = {
  args: {
    title: "CVC 번호를 입력해 주세요",
    description: undefined,
    children: <Input value="" placeholder="123" readOnly />,
  },
};
