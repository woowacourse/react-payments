import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Preview from '../components/Preview';
import { within, expect } from '@storybook/test';

const meta: Meta<typeof Preview> = {
  title: 'Components/Preview Container',
  component: Preview,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Preview>;

interface PreviewProps {
  initialCardNumbers: string[];
  initialPeriod: string[];
  initialBrand: string;
}

const Wrapper = ({
  initialCardNumbers,
  initialPeriod,
  initialBrand,
}: PreviewProps) => {
  const [cardNumbers] = useState<string[]>(initialCardNumbers);
  const [period] = useState<string[]>(initialPeriod);
  const [brand] = useState<string>(initialBrand);
  const isPeriodSeparatorShowing = period.some((p) => p !== '');

  return (
    <Preview
      numbers={cardNumbers}
      period={period}
      brand={brand}
      isPeriodSeparatorShowing={isPeriodSeparatorShowing}
    />
  );
};

export const Visa: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={['4123', '1234', '1234', '1234']}
      initialPeriod={['05', '23']}
      initialBrand="bc"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    expect(container).toBeDefined();
    const cardBrandImg = await canvas.findByTestId('card-method');
    expect(cardBrandImg).toBeDefined();
    expect(cardBrandImg.getAttribute('src')).toBe('./images/visa.svg');
  },
};

export const Mastercard: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={['5310', '1234', '1234', '1234']}
      initialPeriod={['06', '24']}
      initialBrand="shinhan"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    expect(container).toBeDefined();
    const cardBrandImg = await canvas.findByTestId('card-method');
    expect(cardBrandImg).toBeDefined();
    expect(cardBrandImg.getAttribute('src')).toBe('./images/master.svg');
  },
};

export const NoLogo: Story = {
  render: () => (
    <Wrapper
      initialCardNumbers={['1234', '1234', '1234', '1234']}
      initialPeriod={['07', '25']}
      initialBrand="kakao"
    />
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId('preview-component');
    expect(container).toBeDefined();
    const cardBrandImg = canvas.queryByTestId('card-method');
    expect(cardBrandImg).toBeNull();
  },
};
