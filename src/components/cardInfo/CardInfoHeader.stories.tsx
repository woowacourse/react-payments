import type { Meta, StoryObj } from "@storybook/react-vite";
import CardInfoHeader from "./CardInfoHeader";

const meta: Meta<typeof CardInfoHeader> = {
  title: "Components/CardInfoHeader",
  component: CardInfoHeader,
};

export default meta;

type Story = StoryObj<typeof CardInfoHeader>;

export const CardNumberGuide: Story = {
  args: {
    guide: "결제할 카드 번호를 입력해 주세요",
    subGuide: "본인 명의의 카드만 결제 가능합니다.",
  },
  render: (args) => <CardInfoHeader {...args}></CardInfoHeader>,
};

export const CardExpireDateGuide: Story = {
  args: {
    guide: "카드 유효기간을 입력해 주세요",
    subGuide: "월/년도(MMYY)를 순서대로 입력해 주세요.",
  },
  render: (args) => <CardInfoHeader {...args}></CardInfoHeader>,
};

export const CardCVCGuide: Story = {
  args: {
    guide: "CVC 번호를 입력해 주세요",
    subGuide: "",
  },
  render: (args) => <CardInfoHeader {...args}></CardInfoHeader>,
};
