import type { Meta, StoryObj } from "@storybook/react";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../.storybook/utils/withCustomCardValidationProvider";
import { CARD_COMPANY } from "../../../constants/card";
import CardPreview from "./CardPreview";

const defaultCardNumber = {
  first: "1111",
  second: "1111",
  third: "1111",
  fourth: "1111",
};

const defaultExpirationPeriod = {
  month: "01",
  year: "30",
};

const meta = {
  title: "CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const NoneCompanyCard: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
};

export const PartiallyMaskedCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumber: {
        ...defaultCardNumber,
        third: "1",
        fourth: "1",
      },
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const VisaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumber: {
        ...defaultCardNumber,
        first: "4111",
      },
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const MasterCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumber: {
        ...defaultCardNumber,
        first: "5111",
      },
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const BCCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.bc,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const ShinhanCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.shinhan,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const KakaobankCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kakaobank,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const HyundaiCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hyundai,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const WooriCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.woori,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const LotteCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.lotte,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const HanaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hana,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const KBCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kb,
      cardNumber: defaultCardNumber,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};
