import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import type { IssuerKoreanNameType } from "../../../../../shared/types/Issuer";
import CardCompanySelectField from "./CardCompanySelectField";

const meta = {
  title: "feature/CardRegister/components/CardCompanySelectField",
  component: CardCompanySelectField,
  tags: ["autodocs"],
  args: {
    selectedCardCompany: null,
    onSelect: fn(),
  },
} satisfies Meta<typeof CardCompanySelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: function InteractiveCardCompanySelectField(args) {
    const [selectedCardCompany, setSelectedCardCompany] =
      useState<IssuerKoreanNameType | null>(null);

    return (
      <div>
        <CardCompanySelectField
          {...args}
          selectedCardCompany={selectedCardCompany}
          onSelect={(cardCompany) => {
            setSelectedCardCompany(cardCompany);
            args.onSelect(cardCompany);
          }}
        />
        <p>선택된 카드사: {selectedCardCompany ?? "없음"}</p>
      </div>
    );
  },
};
