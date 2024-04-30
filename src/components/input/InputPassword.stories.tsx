import type { Meta, StoryObj } from "@storybook/react";
import InputPassword from "./InputPassword";

const meta = {
  title: "Payment/InputPassword",
  component: InputPassword,

  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 패스워드 입력 컴포넌트",
      },
    },
  },

  argTypes: {
    inputValue: {
      description: "패스워드",
    },
    handleChange: {
      description: "패스워드 핸들러",
    },
    handleBlur: {
      description: "패스워드 블러 핸들러",
    },
    inputError: {
      description: "에러 발생 여부",
    },
  },
} satisfies Meta<typeof InputPassword>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "신용카드 패스워드 번호 입력",
      },
    },
  },

  args: {
    inputValue: "",
    handleChange: () => {},
    handleBlur: () => {},
    inputError: false,
    id: "password",
  },
};
