import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { INPUT_TYPE } from "../../constants/constants";
import { withCardProviders } from "../../../.storybook/CardProviderDecorator";

const defaultError = {
  cardNumbers: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
  expirationPeriod: {
    month: false,
    year: false,
  },
  cvcNumber: false,
  cardBrand: false,
  password: false,
};

const meta = {
  title: "InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  decorators: [withCardProviders({})],
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const CardNumber: Story = {
  decorators: [
    withCardProviders({
      cardNumbers: {
        first: "1111",
        second: "2222",
        third: "3333",
        fourth: "4444",
      },
    }),
  ],
  args: {
    type: INPUT_TYPE.cardNumbers,
    error: defaultError,
  },
};

export const ExpirationPeriod: Story = {
  decorators: [
    withCardProviders({
      expirationPeriod: {
        month: "03",
        year: "28",
      },
    }),
  ],
  args: {
    type: INPUT_TYPE.expirationPeriod,
    error: defaultError,
  },
};

export const CvcNumber: Story = {
  decorators: [
    withCardProviders({
      cvcNumber: "111",
    }),
  ],
  args: {
    type: INPUT_TYPE.cvcNumber,
    error: defaultError,
  },
};

export const WithCardNumberError: Story = {
  decorators: [
    withCardProviders({
      cardNumbers: {
        first: "123a",
        second: "4567",
        third: "8910",
        fourth: "1112",
      },
    }),
  ],
  args: {
    type: INPUT_TYPE.cardNumbers,
    error: {
      cardNumbers: {
        first: true,
        second: false,
        third: false,
        fourth: false,
      },
      expirationPeriod: {
        month: false,
        year: false,
      },
      cvcNumber: false,
      cardBrand: false,
      password: false,
    },
  },
};

export const WithExpirationPeriodError: Story = {
  decorators: [
    withCardProviders({
      expirationPeriod: {
        month: "ab",
        year: "25",
      },
    }),
  ],
  args: {
    type: INPUT_TYPE.expirationPeriod,
    error: {
      cardNumbers: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      },
      expirationPeriod: {
        month: true, // 월 입력에 에러 표시
        year: false,
      },
      cvcNumber: false,
      cardBrand: false,
      password: false,
    },
  },
};

export const WithCvcNumberError: Story = {
  decorators: [
    withCardProviders({
      cvcNumber: "12a", // 숫자가 아닌 값 포함
    }),
  ],
  args: {
    type: INPUT_TYPE.cvcNumber,
    error: {
      cardNumbers: {
        first: false,
        second: false,
        third: false,
        fourth: false,
      },
      expirationPeriod: {
        month: false,
        year: false,
      },
      cvcNumber: true, // CVC 입력에 에러 표시
      cardBrand: false,
      password: false,
    },
  },
};
