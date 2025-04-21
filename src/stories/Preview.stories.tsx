import { useState, useRef } from 'react';
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
}

const Wrapper = ({ initialCardNumbers, initialPeriod }: PreviewProps) => {
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
    expect(container).toBeDefined();
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    expect(cardMethodImg.getAttribute('src')).toBe('./images/visa.svg');
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
    expect(container).toBeDefined();
    const cardMethodImg = await canvas.findByTestId('card-method');
    expect(cardMethodImg).toBeDefined();
    expect(cardMethodImg.getAttribute('src')).toBe('./images/master.svg');
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
    expect(container).toBeDefined();
    const cardMethodImg = canvas.queryByTestId('card-method');
    expect(cardMethodImg).toBeNull();
  },
};
