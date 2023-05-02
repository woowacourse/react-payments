import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import CardPasswordInput from "./CardPasswordInput";
import { CardPassword, CardPasswordKey } from "../../types";

const meta: Meta<typeof CardPasswordInput> = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
  tags: ["autodocs"],

  argTypes: {
    password: {
      description: "비밀번호 상태입니다.",
    },
    onChange: {
      description: "비밀번호 상태 변경 함수입니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CardPasswordInput>;

const CardPasswordInputwithHooks = () => {
  const [password, setPassword] = useState<CardPassword>({
    first: "",
    second: "",
  });

  const handlePassword = (pw: string, targetDigit: CardPasswordKey) => {
    setPassword({ ...password, [targetDigit]: pw });
  };

  return <CardPasswordInput password={password} onChange={handlePassword} />;
};

export const Default: Story = {
  render: () => {
    return <CardPasswordInputwithHooks />;
  },
};
