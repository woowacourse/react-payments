import type { Meta, StoryObj } from '@storybook/react';

import Icon from '.';

const meta: Meta<typeof Icon> = {
  title: 'atomics/Icon',
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BCCardIcon: Story = {
  args: {
    cardName: 'BC',
    width: '36px',
    height: '36px',
  },
};

export const HANACardIcon: Story = {
  args: {
    cardName: 'HANA',
    width: '36px',
    height: '36px',
  },
};

export const HYUNDAICardIcon: Story = {
  args: {
    cardName: 'HYUNDAI',
    width: '36px',
    height: '36px',
  },
};

export const KAKAOCardIcon: Story = {
  args: {
    cardName: 'KAKAO',
    width: '36px',
    height: '36px',
  },
};
export const KBCardIcon: Story = {
  args: {
    cardName: 'KB',
    width: '36px',
    height: '36px',
  },
};

export const LotteCardIcon: Story = {
  args: {
    cardName: 'LOTTE',
    width: '36px',
    height: '36px',
  },
};

export const SHINHANCardIcon: Story = {
  args: {
    cardName: 'SHINHAN',
    width: '36px',
    height: '36px',
  },
};

export const WORRICardIcon: Story = {
  args: {
    cardName: 'WORRI',
    width: '36px',
    height: '36px',
  },
};
