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

export const CardNumbers: Story = {
  decorators: [withRouter, withCardProviders({})],

  args: {
    type: INPUT_TYPE.cardNumbers,
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
      cardNumbers: { first: false, second: false, third: false, fourth: false },
      expirationPeriod: { month: false, year: false },
      cvcNumber: false,
      cardBrand: false,
      password: false,
    },
  },
};

export const ExpirationPeriod: Story = {
  decorators: [withRouter, withCardProviders({})],
  args: {
    type: INPUT_TYPE.expirationPeriod,
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
      cardNumbers: { first: false, second: false, third: false, fourth: false },
      expirationPeriod: { month: false, year: false },
      cvcNumber: false,
      cardBrand: false,
      password: false,
    },
  },
};

export const cvcNumber: Story = {
  decorators: [withRouter, withCardProviders({})],
  args: {
    type: INPUT_TYPE.cvcNumber,
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
      cardNumbers: { first: false, second: false, third: false, fourth: false },
      expirationPeriod: { month: false, year: false },
      cvcNumber: false,
      cardBrand: false,
      password: false,
    },
  },
};
