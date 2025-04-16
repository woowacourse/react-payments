import type { Meta, StoryObj } from "@storybook/react";
import Input from "./Input";
import { useState } from "react";

const meta = {
  title: "MyComponent/MyInput",
  component: Input,
  tags: ["autodocs"], // ✅ 자동 문서화 활성화!
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    placeholder: "1234",
    maxLength: 4,
    cardNumber: "",
  },
  render: (args: any) => {
    const [cardNumber, setCardNumber] = useState(args.cardNumber);

    return (
      <Input
        placeholder={args.placeholder}
        maxLength={args.maxLength}
        cardNumber={cardNumber}
        setCardNumber={setCardNumber}
      />
    );
  },
};
