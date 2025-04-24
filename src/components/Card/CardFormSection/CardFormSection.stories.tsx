import type { Meta, StoryObj } from "@storybook/react";
import { CARD_FORM_TYPE } from "../../../constants/constants";
import CardFormSection from "./CardFormSection";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";
import { withCustomCardValidationProvider } from "../../../../.storybook/utils/withCustomCardValidationProvider";

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
      cardNumberErrors: {
        first: true,
        second: true,
        third: true,
        fourth: true,
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
      expirationPeriodErrors: {
        month: true,
        year: true,
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
    withCustomCardValidationProvider({ cvcNumberError: true }),
  ],
  args: {
    type: CARD_FORM_TYPE.cvcNumber,
  },
};

export const CardCompanyWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({ cardCompanyError: true }),
  ],
  args: {
    type: CARD_FORM_TYPE.cardCompany,
  },
};

export const PasswordWithError: Story = {
  decorators: [
    withCustomCardProvider({}),
    withCustomCardValidationProvider({ passwordError: true }),
  ],
  args: {
    type: CARD_FORM_TYPE.password,
  },
};
