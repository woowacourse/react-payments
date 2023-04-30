import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CardDetailView from "./CardDetailView";

const meta = {
  component: CardDetailView,
  title: "CardDetail/CardDetailView",
  tags: ["autodocs"],
} satisfies Meta<typeof CardDetailView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultCard: Story = {
  args: {
    cardNumberHidden: "",
    cardDate: "",
    cardOwnerName: "",
    cardCompany: "없음",
  },
};

export const BCCard: Story = {
  args: {
    cardNumberHidden: "1111-1111-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "BC카드",
  },
};

export const SHCard: Story = {
  args: {
    cardNumberHidden: "2222-2222-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "신한카드",
  },
};

export const KAKAOCard: Story = {
  args: {
    cardNumberHidden: "3333-3333-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "카카오뱅크",
  },
};

export const HDCard: Story = {
  args: {
    cardNumberHidden: "4444-4444-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "현대카드",
  },
};

export const WRCard: Story = {
  args: {
    cardNumberHidden: "5555-5555-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "우리카드",
  },
};

export const LTCard: Story = {
  args: {
    cardNumberHidden: "6666-6666-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "롯데카드",
  },
};

export const HNCard: Story = {
  args: {
    cardNumberHidden: "7777-7777-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "하나카드",
  },
};

export const KBCard: Story = {
  args: {
    cardNumberHidden: "8888-8888-••••-••••",
    cardDate: "12/25",
    cardOwnerName: "루루&가람",
    cardCompany: "국민카드",
  },
};
