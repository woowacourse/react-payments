import type { Meta, StoryObj } from "@storybook/react";
import InputCVC from "./InputCVC";

const meta = {
  title: "Payment/InputCVC",
  component: InputCVC,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 CVC 입력 컴포넌트",
      },
    },
  },

  argTypes: {
    inputValue: {
      description: "CVC 번호",
    },
    handleChange: {
      description: "CVC 번호 핸들러",
    },
    handleBlur: {
      description: "CVC 번호 블러 핸들러",
    },
    inputError: {
      description: "에러 발생 여부",
    },
  },
} satisfies Meta<typeof InputCVC>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "신용카드 CVC 번호 입력",
      },
    },
  },

  args: {
    inputValue: "",
    handleChange: () => {},
    handleBlur: () => {},
    inputError: false,
    id: "cvcNumber",
  },
};
