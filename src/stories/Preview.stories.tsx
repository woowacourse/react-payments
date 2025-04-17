import React, { useState, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Preview from '../components/Preview';
import { within, waitFor, expect } from '@storybook/test';

const meta: Meta<typeof Preview> = {
  title: 'Components/Preview Container',
  component: Preview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Preview>;

const Wrapper: React.FC<{
  initialCardNumbers: string[];
  initialPeriod: string[];
}> = ({ initialCardNumbers, initialPeriod }) => {
  const [cardNumbers] = useState<string[]>(initialCardNumbers);
  const [period] = useState<string[]>(initialPeriod);
  const separatorRef = useRef<HTMLDivElement>(null);
  return (
    <Preview
      cardNumbers={cardNumbers}
      period={period}
      separatorRef={separatorRef}
    />
  );
};

export const Visa: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={['4123', '1234', '1234', '1234']}
      initialPeriod={['05', '23']}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    await waitFor(() => expect(container).toBeDefined());
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    await waitFor(() =>
      expect(cardMethodImg?.getAttribute('src')).toBe('./images/visa.svg')
    );
  },
};

export const Mastercard: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={['5310', '1234', '1234', '1234']}
      initialPeriod={['06', '24']}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    await waitFor(() => expect(container).toBeDefined());
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    await waitFor(() =>
      expect(cardMethodImg?.getAttribute('src')).toBe('./images/Mastercard.svg')
    );
  },
};

export const NoLogo: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={['1234', '1234', '1234', '1234']}
      initialPeriod={['07', '25']}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    await waitFor(() => expect(container).toBeDefined());
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    await waitFor(() => expect(cardMethodImg?.getAttribute('src')).toBe(null));
  },
};
