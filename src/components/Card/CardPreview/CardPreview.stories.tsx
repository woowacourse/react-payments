import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";
import { CARD_COMPANY } from "../../../constants/constants";
import { withCustomCardValidationProvider } from "../../../../.storybook/utils/withCustomCardValidationProvider";

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
    withCustomCardValidationProvider({}),
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
    withCustomCardValidationProvider({}),
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
    withCustomCardValidationProvider({}),
  ],
};

export const BCCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.bc,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const ShinhanCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.shinhan,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const KakaobankCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kakaobank,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const HyundaiCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hyundai,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const WooriCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.woori,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const LotteCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.lotte,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const HanaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.hana,
    }),
    withCustomCardValidationProvider({}),
  ],
};

export const KBCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardCompany: CARD_COMPANY.kb,
    }),
    withCustomCardValidationProvider({}),
  ],
};

// TODO: 색깔 있을 때도 글씨 색 다른거 보여주기 (카뱅 색상 다른거 보여주기)
// TODO: 전체 카드 번호, 유효기간 번호 통일 (일관성)
// TODO: 카드 번호에 에러 발생한 경우에는 카드 타입이 보여지지 않도록 함
