import React from "react";
import type { Meta } from "@storybook/react";
import AddCardResultPage from "../../component/AddCardResultPage/AddCardResultPage";

const meta = {
  component: AddCardResultPage,
  title: "Page",
} satisfies Meta<typeof AddCardResultPage>;

export default meta;

/* eslint-disable-next-line */
const addCreditCard = () => {};

export const AddCardResult = () => (
  <AddCardResultPage addCreditCard={addCreditCard} />
);
