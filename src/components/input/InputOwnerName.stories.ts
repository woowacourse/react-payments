import type { Meta, StoryObj } from "@storybook/react";
import InputOwnerName from "./InputOwnerName";

const meta = {
  title: "Payment/InputOwnerName",
  component: InputOwnerName,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 소유자 이름 입력 컴포넌트",
      },
    },
  },
  argTypes: {
    inputValue: {
      description: "카드 소유자 이름",
    },
    handleChange: {
      description: "카드 소유자 이름 핸들러",
    },
    handleBlur: {
      description: "카드 소유자 이름 블러 핸들러",
    },
    inputError: {
      description: "에러 발생 여부",
    },
  },
} satisfies Meta<typeof InputOwnerName>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "신용카드 유효기간 입력",
      },
    },
  },

  args: {
    inputValue: "",
    handleChange: () => {},
    handleBlur: () => {},
    inputError: false,
    id: "ownerName",
  },
};
