import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Payment/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 정보 컴포넌트",
      },
    },
  },
  argTypes: {
    content: {
      description: "버튼 텍스트",
    },
    onClick: {
      description: "버튼 클릭 시 실행될 콜백",
    },
    styles: {
      description: "버튼의 추가 스타일",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "공통 버튼",
      },
    },
  },

  args: {
    content: "입력",
    onClick: () => {},
  },
};
