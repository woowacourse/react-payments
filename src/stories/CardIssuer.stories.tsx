import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect, fn, userEvent, within } from 'storybook/test';
import { useState } from 'react';

import CardIssuer from '../components/CardIssuer';
import type { CardIssuerType } from '../types/cardStausTypes';

const meta = {
  title: 'Components/CardIssuer',
  component: CardIssuer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CardIssuer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardIssuer: '',
    handleCardIssuer: fn(),
  },
};

export const Selected: Story = {
  args: {
    cardIssuer: 'kakaoCard',
    handleCardIssuer: fn(),
  },
};

export const Interactive: Story = {
  args: {
    cardIssuer: '',
    handleCardIssuer: fn(),
  },
  render: () => {
    const [cardIssuer, setCardIssuer] = useState<CardIssuerType | ''>('');

    return (
      <div>
        <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={setCardIssuer} />

        <div data-testid="card-issuer-value" style={{ marginTop: '16px' }}>
          선택값: {cardIssuer || '없음'}
        </div>
      </div>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const issuerSelect = canvas.getByLabelText('카드사를 선택해 주세요');

    await userEvent.selectOptions(issuerSelect, 'kakaoCard');

    await expect(issuerSelect).toHaveValue('kakaoCard');
    await expect(canvas.getByTestId('card-issuer-value')).toHaveTextContent('kakaoCard');
  },
};
