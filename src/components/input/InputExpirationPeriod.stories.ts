import type { Meta, StoryObj } from "@storybook/react";
import InputExpirationPeriod from "./InputExpirationPeriod";

const meta = {
  title: "Payment/InputExpirationPeriod",
  component: InputExpirationPeriod,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 유효기간 입력 컴포넌트",
      },
    },
  },
  argTypes: {
    inputValue: {
      description: "카드 유효기간",
    },
    handleChange: {
      description: "카드 유효기간 핸들러",
    },
    handleBlur: {
      description: "카드 유효기간 블러 핸들러",
    },
    inputError: {
      description: "에러 발생 여부",
    },
  },
} satisfies Meta<typeof InputExpirationPeriod>;

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
    inputValue: {
      month: "",
      year: "",
    },
    handleChange: () => {},
    handleBlur: () => {},
    inputError: false,
    id: "password",
  },
};
