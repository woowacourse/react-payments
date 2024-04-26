import type { Meta, StoryObj } from "@storybook/react";
import InputCreditCardNumber from "./InputCreditCardNumber";

const meta = {
  title: "Payment/InputCreditCardNumber",
  component: InputCreditCardNumber,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "신용카드 정보 입력 컴포넌트",
      },
    },
  },
  argTypes: {
    inputValue: {
      description: "카드 번호",
    },
    handleChange: {
      description: "카드 번호 핸들러",
    },
    handleBlur: {
      description: "카드 번호 블러 핸들러",
    },
    inputError: {
      description: "에러 발생 여부",
    },
  },
} satisfies Meta<typeof InputCreditCardNumber>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: "신용카드 번호 입력",
      },
    },
  },

  args: {
    inputValue: {
      firstValue: "",
      secondValue: "",
      thirdValue: "",
      fourthValue: "",
    },
    handleChange: () => {},
    handleBlur: () => {},
    inputError: false,
  },
};
