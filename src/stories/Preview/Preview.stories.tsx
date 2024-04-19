import type { Meta, StoryObj } from '@storybook/react';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';

const meta = {
  title: 'CardInformationPreview',
  component: CardInformationPreview,
} satisfies Meta<typeof CardInformationPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumberState: {},
    expirationDateState: {},
    userNameState: '',
    showImageCondition: {
      isVisa: false,
      isMasterCard: false,
    },
  },
};

export const Fulfilled: Story = {
  args: {
    cardNumberState: { first: 5123, second: 1234, third: 1234, fourth: 1234 },
    expirationDateState: { month: 12, year: 24 },
    userNameState: 'SIMO COOKIE',
    showImageCondition: {
      isVisa: false,
      isMasterCard: true,
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumberState: { first: 4123 },
    expirationDateState: {},
    userNameState: '',
    showImageCondition: {
      isVisa: true,
      isMasterCard: false,
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardNumberState: { first: 5123 },
    expirationDateState: {},
    userNameState: '',
    showImageCondition: {
      isVisa: false,
      isMasterCard: true,
    },
  },
};

export const NormalCard: Story = {
  args: {
    cardNumberState: { first: 1111 },
    expirationDateState: {},
    userNameState: '',
    showImageCondition: {
      isVisa: false,
      isMasterCard: false,
    },
  },
};

export const HiddenCardNumber: Story = {
  args: {
    cardNumberState: { third: 5123 },
    expirationDateState: {},
    userNameState: '',
    showImageCondition: {
      isVisa: false,
      isMasterCard: false,
    },
  },
};
