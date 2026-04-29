import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardSection } from "./CardSection";
import { CardNumberInputContainer } from "./CardNumberInput";
import { CardExpiryDateInputContainer } from "./CardExpiryDateInput";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "CardSection",
  component: CardSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CardSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardNumberInputSection: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    subTitle: "본인 명의의 카드만 결제 가능합니다.",
    children: <CardNumberInputContainer />,
  },
};

export const CardExpiryDateInputSection: Story = {
  args: {
    title: "카드 유효기간을 입력해 주세요",
    subTitle: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    children: <CardExpiryDateInputContainer />,
  },
};

export const CardCVCInputSection: Story = {
  args: {
    title: "CVC 번호를 입력해 주세요",
    subTitle: "",
    children: <CardNumberInputContainer />,
  },
};
