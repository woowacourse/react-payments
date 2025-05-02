import React, { useState, useRef } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Preview from '../../components/Preview';
import { within, waitFor, expect } from '@storybook/test';
import { CardNumber, Period } from '../../types';

const meta: Meta<typeof Preview> = {
  title: 'Components/Preview Container',
  component: Preview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '카드 번호와 유효기간 입력 정보를 실시간으로 카드에 보여주는 컴포넌트입니다. 카드 브랜드(VISA, Mastercard)를 자동으로 인식하여 로고를 표시합니다.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Preview>;

const Wrapper = ({
  initialCardNumbers,
  initialPeriod,
}: {
  initialCardNumbers: CardNumber;
  initialPeriod: Period;
}) => {
  const [cardNumbers] = useState<CardNumber>(initialCardNumbers);
  const [period] = useState<Period>(initialPeriod);
  const separatorRef = useRef<HTMLDivElement>(null);
  return (
    <Preview
      cardNumbers={cardNumbers}
      period={period}
      separatorRef={separatorRef}
      cardFrameColor='#333333'
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
        `${import.meta.env.BASE_URL}images/visa.svg`
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
        `${import.meta.env.BASE_URL}images/Mastercard.svg`
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
    await waitFor(() => {
      const cardMethodImg = canvas.queryByTestId('card-method');
      expect(cardMethodImg).not.toBeInTheDocument();
    });
  },
};
