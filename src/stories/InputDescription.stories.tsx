import { Meta, StoryObj } from "@storybook/react";
import InputDescription from "../components/Form/InputDescription";

const meta = {
  title: "InputDescription",
  component: InputDescription,
} satisfies Meta<typeof InputDescription>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요.",
    description: "본인 명의의 카드만 결제 가능합니다.",
  },
};
