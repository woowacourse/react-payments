import type { Meta, StoryObj } from "@storybook/react";
import { Children } from "react";
import { Link } from "react-router-dom";
import { PAGE } from "../../constant/PagePath";
import AppBar from "./AppBar";

const meta: Meta<typeof AppBar> = {
  title: "AppBar",
  component: AppBar,
};

export default meta;

type Story = StoryObj<typeof AppBar>;

export const CardListPage: Story = {
  args: {
    title: "보유카드",
  },
};

export const AddCardPage: Story = {
  args: {
    title: "카드추가",
    children: <Link to={PAGE.CARD_LIST}>〈</Link>,
  },
};
