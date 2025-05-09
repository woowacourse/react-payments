import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumber: ['1234', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '04', year: '26' },
    cardCompany: undefined,
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const Visa: Story = {
  args: {
    cardNumber: ['4123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: undefined,
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const Master: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: undefined,
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const BC카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: 'BC카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 국민카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '국민카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 롯데카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '롯데카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 신한카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '신한카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 우리카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '우리카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 카카오뱅크: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '카카오뱅크',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 하나카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '하나카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};

export const 현대카드: Story = {
  args: {
    cardNumber: ['5123', '5678', '9012', '3456'],
    cardValidityPeriod: { month: '12', year: '26' },
    cardCompany: '현대카드',
  },
  render: (args) => {
    return <CardPreview {...args} />;
  },
};
