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
type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};

type Period = {
  month: string;
  year: string;
};

const Wrapper: React.FC<{
  initialCardNumbers: CardNumber;
  initialPeriod: Period;
}> = ({ initialCardNumbers, initialPeriod }) => {
  const [cardNumbers] = useState<CardNumber>(initialCardNumbers);
  const [period] = useState<Period>(initialPeriod);
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
      initialCardNumbers={{
        first: '4123',
        second: '1234',
        third: '1234',
        fourth: '1234',
      }}
      initialPeriod={{
        month: '05',
        year: '23',
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    await waitFor(() => expect(container).toBeDefined());
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    await waitFor(() =>
      expect(cardMethodImg?.getAttribute('src')).toBe(
        `${import.meta.env.BASE_URL}/images/visa.svg`
      )
    );
  },
};

export const Mastercard: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={{
        first: '5310',
        second: '1234',
        third: '1234',
        fourth: '1234',
      }}
      initialPeriod={{
        month: '06',
        year: '24',
      }}
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    await waitFor(() => expect(container).toBeDefined());
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    await waitFor(() =>
      expect(cardMethodImg?.getAttribute('src')).toBe(
        `${import.meta.env.BASE_URL}/images/Mastercard.svg`
      )
    );
  },
};

export const NoLogo: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={{
        first: '1234',
        second: '1234',
        third: '1234',
        fourth: '1234',
      }}
      initialPeriod={{
        month: '07',
        year: '25',
      }}
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
