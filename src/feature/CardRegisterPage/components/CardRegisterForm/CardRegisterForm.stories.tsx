import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn, userEvent, within } from "storybook/test";
import { MemoryRouter } from "react-router-dom";

import CardRegisterForm from "./CardRegisterForm";
import type {
  CardInfoType,
  CardNumberChunkType,
} from "../../../../shared/types/CardInfoType";
import type { IssuerKoreanNameType } from "../../../../shared/types/Issuer";

const meta = {
  title: "feature/CardRegister/components/CardRegisterForm",
  component: CardRegisterForm,
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
    updateCardNumbers: fn(),
    updateExpiryMonth: fn(),
    updateExpiryYear: fn(),
    updateCardCompany: fn(),
  },
} satisfies Meta<typeof CardRegisterForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const filledCardNumberInfo = {
  cardNumbers: ["4123", "5678", "1234", "5678"],
  expiryMonth: "",
  expiryYear: "",
  selectedCardCompany: null,
} satisfies CardInfoType;

const filledExpiryInfo = {
  cardNumbers: ["4123", "5678", "1234", "5678"],
  expiryMonth: "12",
  expiryYear: "30",
  selectedCardCompany: "신한카드",
} satisfies CardInfoType;

export const CardNumberStep: Story = {};

export const CardNumberStepWithPartialInput: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4123", "56", "", ""],
      expiryMonth: "1",
      expiryYear: "",
      selectedCardCompany: null,
    },
  },
};

export const CardCompanyStep: Story = {
  args: {
    cardInfo: filledCardNumberInfo,
  },
};

export const ExpiryStep: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4123", "5678", "1234", "5678"],
      expiryMonth: "",
      expiryYear: "",
      selectedCardCompany: "신한카드",
    },
  },
};

export const CvcStep: Story = {
  args: {
    cardInfo: filledExpiryInfo,
  },
};

export const PasswordStep: Story = {
  args: {
    cardInfo: filledExpiryInfo,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText("CVC"), "123");
  },
};

export const CompleteStep: Story = {
  args: {
    cardInfo: filledExpiryInfo,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText("CVC"), "123");
    await userEvent.type(
      await canvas.findByLabelText("비밀번호 앞 2자리"),
      "12",
    );
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
  render: function InteractiveCardRegisterForm(args) {
    const [cardInfo, setCardInfo] = useState<CardInfoType>(args.cardInfo);

    const updateCardNumbers = (cardNumbers: CardNumberChunkType) => {
      setCardInfo((previousCardInfo) => ({ ...previousCardInfo, cardNumbers }));
    };

    const updateExpiryMonth = (expiryMonth: string) => {
      setCardInfo((previousCardInfo) => ({ ...previousCardInfo, expiryMonth }));
    };

    const updateExpiryYear = (expiryYear: string) => {
      setCardInfo((previousCardInfo) => ({ ...previousCardInfo, expiryYear }));
    };

    const updateCardCompany = (selectedCardCompany: IssuerKoreanNameType) => {
      setCardInfo((previousCardInfo) => ({
        ...previousCardInfo,
        selectedCardCompany,
      }));
    };

    return (
      <CardRegisterForm
        {...args}
        cardInfo={cardInfo}
        updateCardNumbers={updateCardNumbers}
        updateExpiryMonth={updateExpiryMonth}
        updateExpiryYear={updateExpiryYear}
        updateCardCompany={updateCardCompany}
      />
    );
  },
};
