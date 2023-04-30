import React from "react";
import type { Meta } from "@storybook/react";
import CardListPage from "../../component/CardListPage/CardListPage";

const meta = {
  component: CardListPage,
  title: "Page",
} satisfies Meta<typeof CardListPage>;

export default meta;

export const CardList = () => <CardListPage creditCardList={[]} />;
