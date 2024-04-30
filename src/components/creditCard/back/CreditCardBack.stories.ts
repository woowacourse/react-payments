import type { Meta, StoryObj } from "@storybook/react";
import CreditCardBack from ".";

const meta = {
  title: "Payment/CreditCardBack",
  component: CreditCardBack,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 정보 컴포넌트",
      },
    },
  },
  argTypes: {
    cvcNumber: {
      description: "카드 cvc 번호",
    },
  },
} satisfies Meta<typeof CreditCardBack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "신용카드",
      },
    },
  },

  args: {
    cvcNumber: "462",
  },
};
