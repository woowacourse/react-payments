import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";
import { CARD_COMPANY } from "../../../constants/constants";

const meta = {
  title: "CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const NoneCompanyCard: Story = {
  decorators: [withCustomCardProvider({})],
};

export const PartiallyMaskedCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumbers: {
        first: "1234",
        second: "5678",
        third: "91",
        fourth: "345",
      },
      expirationPeriod: {
        month: "05",
        year: "27",
      },
    }),
  ],
};

export const VisaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumbers: {
        first: "4111",
        second: "1111",
        third: "1111",
        fourth: "1111",
      },
      expirationPeriod: {
        month: "02",
        year: "25",
      },
    }),
  ],
};

export const MasterCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumbers: {
        first: "5111",
        second: "2222",
        third: "3333",
        fourth: "4444",
      },
      expirationPeriod: {
        month: "11",
        year: "28",
      },
    }),
  ],
};

export const BCCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.bc,
    }),
  ],
};

export const ShinhanCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.shinhan,
    }),
  ],
};

export const KakaobankCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kakaobank,
    }),
  ],
};

export const HyundaiCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hyundai,
    }),
  ],
};

export const WooriCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.woori,
    }),
  ],
};

export const LotteCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.lotte,
    }),
  ],
};

export const HanaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hana,
    }),
  ],
};

export const KBCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kb,
    }),
  ],
};
