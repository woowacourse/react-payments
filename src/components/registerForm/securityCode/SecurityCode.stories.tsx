import type { Meta } from "@storybook/react";
import React, { useRef } from "react";
import SecurityCode from ".";

const securityCode = {
  component: SecurityCode,
  title: "SecurityCode",
} satisfies Meta<typeof SecurityCode>;

export default securityCode;

export const Example = () => {
  const registerCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={registerCard}>
      <SecurityCode />
      <button>다음</button>
    </form>
  );
};
