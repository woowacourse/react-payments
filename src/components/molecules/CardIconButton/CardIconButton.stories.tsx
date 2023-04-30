import type { Meta, StoryObj } from '@storybook/react';

import CardIconButton from '.';

const meta: Meta<typeof CardIconButton> = {
  title: 'molecules/CardIconButton',
  component: CardIconButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    cardName: 'BC',
  },
};

export const HANACard: Story = {
  args: {
    cardName: 'HANA',
  },
};

export const HYUNDAICard: Story = {
  args: {
    cardName: 'HYUNDAI',
  },
};

export const KAKAOBANKCard: Story = {
  args: {
    cardName: 'KAKAO',
  },
};

export const KBCard: Story = {
  args: {
    cardName: 'KB',
  },
};

export const LOTTECard: Story = {
  args: {
    cardName: 'LOTTE',
  },
};

export const SHINHANCard: Story = {
  args: {
    cardName: 'SHINHAN',
  },
};

export const WORRICard: Story = {
  args: {
    cardName: 'WORRI',
  },
};
