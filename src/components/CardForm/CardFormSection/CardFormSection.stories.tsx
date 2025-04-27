import type { Meta, StoryObj } from "@storybook/react";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../.storybook/utils/withCustomCardValidationProvider";
import { CARD_FORM_TYPE } from "../../../constants/card";
import CardFormSection from "./CardFormSection";

const meta = {
  title: "CardFormSection",
  component: CardFormSection,
  tags: ["autodocs"],
} satisfies Meta<typeof CardFormSection>;

export default meta;

type Story = StoryObj<typeof CardFormSection>;

export const CardNumbers: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
  args: {
    type: CARD_FORM_TYPE.cardNumbers,
  },
};

export const ExpirationPeriod: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
  args: {
    type: CARD_FORM_TYPE.expirationPeriod,
  },
};

export const CvcNumber: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
  args: {
    type: CARD_FORM_TYPE.cvcNumber,
  },
};

export const CardCompany: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
  args: {
    type: CARD_FORM_TYPE.cardCompany,
  },
};

export const Password: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({}),
  ],
  args: {
    type: CARD_FORM_TYPE.password,
  },
};

export const CardNumbersWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      cardNumberError: {
        errorMessage: "숫자만 입력 가능합니다",
        hasError: {
          first: true,
          second: true,
          third: true,
          fourth: true,
        },
      },
    }),
  ],
  args: {
    type: CARD_FORM_TYPE.cardNumbers,
  },
};

export const ExpirationPeriodWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      expirationPeriodError: {
        errorMessage: "숫자만 입력 가능합니다",
        hasError: {
          month: true,
          year: true,
        },
      },
    }),
  ],
  args: {
    type: CARD_FORM_TYPE.expirationPeriod,
  },
};

export const CvcNumberWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      cvcNumberError: {
        errorMessage: "숫자만 입력 가능합니다",
        hasError: true,
      },
    }),
  ],
  args: {
    type: CARD_FORM_TYPE.cvcNumber,
  },
};

export const CardCompanyWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      cardCompanyError: {
        errorMessage: "카드사를 하나 선택해주세요",
        hasError: true,
      },
    }),
  ],
  args: {
    type: CARD_FORM_TYPE.cardCompany,
  },
};

export const PasswordWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({
      passwordError: {
        errorMessage: "숫자만 입력 가능합니다",
        hasError: true,
      },
    }),
  ],
  args: {
    type: CARD_FORM_TYPE.password,
  },
};
