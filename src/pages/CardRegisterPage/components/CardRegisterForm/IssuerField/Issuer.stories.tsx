import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import type { IssuerKoreanName } from "../../../../../domain/card/cardIssuer";
import CardCompanySelectField from "./IssuerField";

const meta = {
  title: "feature/CardRegister/components/CardCompanySelectField",
  component: CardCompanySelectField,
  tags: ["autodocs"],
  args: {
    selectedIssuer: null,
    onSelect: fn(),
    disabledSelect: false,
  },
} satisfies Meta<typeof CardCompanySelectField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Interactive: Story = {
  render: function InteractiveCardCompanySelectField(args) {
    const [selectedIssuer, setSelectedIssuer] =
      useState<IssuerKoreanName | null>(null);

    return (
      <div>
        <CardCompanySelectField
          {...args}
          selectedIssuer={selectedIssuer}
          onSelect={(cardCompany) => {
            setSelectedIssuer(cardCompany);
            args.onSelect(cardCompany);
          }}
        />
        <p>선택된 카드사: {selectedIssuer ?? "없음"}</p>
      </div>
    );
  },
};
