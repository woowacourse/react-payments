import type { Meta, StoryObj } from "@storybook/react";
import { INPUT_TYPE } from "../../constants/constants";
import InputSection from "./InputSection";
import { withCardProviders } from "../../../.storybook/CardProviderDecorator";
import { withRouter } from "../../../.storybook/withRouter";
const meta = {
  title: "InputSection",
  component: InputSection,
  tags: ["autodocs"],
} satisfies Meta<typeof InputSection>;

export default meta;

type Story = StoryObj<typeof InputSection>;

const commonArgs = {
  validators: {
    validateCardNumber: () => {},
    validateExpirationPeriod: () => {},
    validateCvcNumber: () => {},
    validatePassword: () => {},
  },
  onComplete: () => {},
  isComplete: {
    cardNumbers: { first: false, second: false, third: false, fourth: false },
    expirationPeriod: { month: false, year: false },
    cvcNumber: false,
    cardBrand: false,
    password: false,
  },
  error: {
    cardNumbers: { first: null, second: null, third: null, fourth: null },
    expirationPeriod: { month: null, year: null },
    cvcNumber: null,
    cardBrand: null,
    password: null,
  },
};

export const CardNumbers: Story = {
  decorators: [withRouter, withCardProviders({})],

  args: {
    type: INPUT_TYPE.cardNumbers,
    ...commonArgs,
  },
};

export const ExpirationPeriod: Story = {
  decorators: [withRouter, withCardProviders({})],
  args: {
    type: INPUT_TYPE.expirationPeriod,
    ...commonArgs,
  },
};

export const cvcNumber: Story = {
  decorators: [withRouter, withCardProviders({})],
  args: {
    type: INPUT_TYPE.cvcNumber,
    ...commonArgs,
  },
};

export const password: Story = {
  decorators: [withRouter, withCardProviders({})],
  args: {
    type: INPUT_TYPE.password,
    ...commonArgs,
  },
};

export const cardBrand: Story = {
  decorators: [withRouter, withCardProviders({})],
  args: {
    type: INPUT_TYPE.cardBrand,
    ...commonArgs,
  },
};
