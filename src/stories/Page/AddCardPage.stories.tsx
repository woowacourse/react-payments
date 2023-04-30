import React from "react";
import type { Meta } from "@storybook/react";
import AddCardPage from "../../component/AddCardPage/AddCardPage";

const meta = {
  component: AddCardPage,
  title: "Page",
} satisfies Meta<typeof AddCardPage>;

export default meta;

export const AddCard = () => <AddCardPage />;
