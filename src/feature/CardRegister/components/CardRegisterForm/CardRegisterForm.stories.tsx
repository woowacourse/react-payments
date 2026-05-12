import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { MemoryRouter } from "react-router-dom";

import InfoInputSection from "./CardRegisterForm";
import type {
  CardInfoType,
  CardNumberChunkType,
} from "../../../../common/types/CardInfoType";

const meta = {
  title: "feature/CardRegister/components/InfoInputSection",
  component: InfoInputSection,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/register"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    cardInfo: {
      cardNumbers: ["", "", "", ""],
      expiryMonth: "",
      expiryYear: "",
      selectedCardCompany: null,
    },
    onCardNumbersChange: fn(),
    onExpiryMonthChange: fn(),
    onExpiryYearChange: fn(),
    onCardCompanySelect: fn(),
  },
} satisfies Meta<typeof InfoInputSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Partial: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4123", "56", "", ""],
      expiryMonth: "1",
      expiryYear: "",
      selectedCardCompany: null,
    },
  },
};

export const Filled: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4123", "5678", "1234", "5678"],
      expiryMonth: "12",
      expiryYear: "30",
      selectedCardCompany: "신한카드",
    },
  },
};

export const Interactive: Story = {
  render: function InteractiveInfoInputSection(args) {
    const [cardInfo, setCardInfo] = useState<CardInfoType>(args.cardInfo);

    const handleCardNumbersChange = (cardNumbers: CardNumberChunkType) => {
      setCardInfo((previousCardInfo) => ({ ...previousCardInfo, cardNumbers }));
    };

    const handleExpiryMonthChange = (expiryMonth: string) => {
      setCardInfo((previousCardInfo) => ({ ...previousCardInfo, expiryMonth }));
    };

    const handleExpiryYearChange = (expiryYear: string) => {
      setCardInfo((previousCardInfo) => ({ ...previousCardInfo, expiryYear }));
    };

    return (
      <InfoInputSection
        {...args}
        cardInfo={cardInfo}
        onCardNumbersChange={handleCardNumbersChange}
        onExpiryMonthChange={handleExpiryMonthChange}
        onExpiryYearChange={handleExpiryYearChange}
        onCardCompanySelect={(selectedCardCompany) =>
          setCardInfo((previousCardInfo) => ({
            ...previousCardInfo,
            selectedCardCompany,
          }))
        }
      />
    );
  },
};
