import { Meta } from "@storybook/react";
import React from "react";
import CardNumber from ".";

const cardNumber = {
  component: CardNumber,
  title: "Card Number Input",
} satisfies Meta<typeof CardNumber>;

export default cardNumber;

export const Example = () => {
  const registerCard = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={registerCard}>
      <CardNumber />
      <button>다음</button>
    </form>
  );
};
