import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";
import { INPUT_TYPE } from "../../constants/constants";
import { withCustomCardProvider } from "../../../.storybook/utils/withCustomCardProvider";

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
};

const meta = {
  title: "InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  decorators: [withCustomCardProvider({})],
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof InputGroup>;

export const CardNumber: Story = {
  decorators: [
    withCustomCardProvider({
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
    withCustomCardProvider({
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
    withCustomCardProvider({
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
    withCustomCardProvider({
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
      ...defaultError,
      cardNumbers: {
        ...defaultError.cardNumbers,
        first: true,
      },
    },
  },
};

export const WithExpirationPeriodError: Story = {
  decorators: [
    withCustomCardProvider({
      expirationPeriod: {
        month: "ab",
        year: "25",
      },
    }),
  ],
  args: {
    type: INPUT_TYPE.expirationPeriod,
    error: {
      ...defaultError,
      expirationPeriod: {
        ...defaultError.expirationPeriod,
        month: true,
      },
    },
  },
};

export const WithCvcNumberError: Story = {
  decorators: [
    withCustomCardProvider({
      cvcNumber: "12a",
    }),
  ],
  args: {
    type: INPUT_TYPE.cvcNumber,
    error: {
      ...defaultError,
      cvcNumber: true,
    },
  },
};
