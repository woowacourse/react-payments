import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";
import { CARD_COMPANY } from "../../../constants/constants";
import { withCustomCardValidationProvider } from "../../../../.storybook/utils/withCustomCardValidationProvider";

const defaultCardNumbers = {
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
      cardNumbers: {
        ...defaultCardNumbers,
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
      cardNumbers: {
        ...defaultCardNumbers,
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
      cardNumbers: {
        ...defaultCardNumbers,
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
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const ShinhanCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.shinhan,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const KakaobankCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kakaobank,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const HyundaiCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hyundai,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const WooriCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.woori,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const LotteCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.lotte,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const HanaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hana,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const KBCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kb,
      cardNumbers: defaultCardNumbers,
      expirationPeriod: defaultExpirationPeriod,
    }),
    withCustomCardValidationProvider({}),
  ],
};
