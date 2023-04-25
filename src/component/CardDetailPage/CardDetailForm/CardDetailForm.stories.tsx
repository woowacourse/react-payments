import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDetailForm from "./CardDetailForm";

const meta = {
  component: CardDetailForm,
  title: "CardDetail/CardDetailForm",
} satisfies Meta<typeof CardDetailForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    changeCardNumber: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    displayNumber: "1234-1234-••••-••••",

    changeCardDate: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardDate: "01-01",

    changeCardOwnerName: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardOwnerName: "NAME",

    changeCardCVC: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    cardCVC: "•••",

    changeCardPassword: (e: React.FormEvent<HTMLInputElement>) => {
      console.log(e.currentTarget.value);
    },
    cardPassword: ["1", "2"],

    submitCreditCard: () => {
      console.log("");
    },
  },
};
