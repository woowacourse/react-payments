import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta: Meta<typeof CardPreview> = {
  title: 'components/CardPreview/Issuer',
  component: CardPreview,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CardPreview>;

const commonArgs = {
  cardNumberInputValue: {
    cardNumberPart1: '5123',
    cardNumberPart2: '5123',
    cardNumberPart3: '5123',
    cardNumberPart4: '5123',
  },
  expirationDateInputValue: {
    expirationDatePart1: '02',
    expirationDatePart2: '25',
  },
  cardType: 'visa',
};

export const bcCard: Story = {
  args: {
    cardIssuer: 'BC카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const shinhanCard: Story = {
  args: {
    cardIssuer: '신한카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const kakaoBank: Story = {
  args: {
    cardIssuer: '카카오뱅크',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const hyundaiCard: Story = {
  args: {
    cardIssuer: '현대카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const wooriCard: Story = {
  args: {
    cardIssuer: '우리카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const lotteCard: Story = {
  args: {
    cardIssuer: '롯데카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const hanaCard: Story = {
  args: {
    cardIssuer: '하나카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};

export const kbCard: Story = {
  args: {
    cardIssuer: '국민카드',
  },
  render: function Render(args) {
    return <CardPreview {...commonArgs} {...args} />;
  },
};
