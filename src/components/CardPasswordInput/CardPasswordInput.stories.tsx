import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import GlobalStyle from "../../styles/GlobalStyle";
import CardPasswordInput from "./CardPasswordInput";
import { CardPassword, CardPasswordKey } from "../../types";

const meta: Meta<typeof CardPasswordInput> = {
  title: "CardPasswordInput",
  component: CardPasswordInput,
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
    return (
      <>
        <GlobalStyle />
        <CardPasswordInputwithHooks />
      </>
    );
  },
};
