import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import GlobalStyle from "../../styles/GlobalStyle";
import CardSecurityCodeInput from "./CardSecurityCodeInput";

import type { Card } from "../../types";

const meta: Meta<typeof CardSecurityCodeInput> = {
  title: "CardSecurityCodeInput",
  component: CardSecurityCodeInput,
};

export default meta;
type Story = StoryObj<typeof CardSecurityCodeInput>;

const CardSecurityCodeInputwithHooks = () => {
  const [securityCode, setSecurityCode] = useState<Card["securityCode"]>("");

  const handleSecurityCode = (code: string) => {
    setSecurityCode(code);
  };

  return <CardSecurityCodeInput securityCode={securityCode} onChange={handleSecurityCode} />;
};

export const Default: Story = {
  render: () => {
    return (
      <>
        <GlobalStyle />
        <CardSecurityCodeInputwithHooks />
      </>
    );
  },
};
