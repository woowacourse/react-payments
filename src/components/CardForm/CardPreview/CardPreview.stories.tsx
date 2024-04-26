import type { Meta, StoryObj } from '@storybook/react';

import CardPreview from './CardPreview';

const meta = {
  title: 'component/CardPreview',
  component: CardPreview,
  parameters: {
    controls: { exclude: 'isCVCInput' },
  },
  argTypes: {
    cardNumber: {
      options: {
        'No input': ['', '', '', ''],
        'First input': ['2222', '', '', ''],
        'Second input': ['2222', '3333', '', ''],
        'Third input': ['2222', '3333', '4444', ''],
        'Fourth input': ['2222', '3333', '4444', '5555'],
        'Visa Card': ['4444', '3333', '4444', '5555'],
        'Master Card': ['5555', '3333', '4444', '5555'],
      },
      control: { type: 'select' },
    },
    month: {
      options: {
        Default: '12',
        'No input': '',
      },
      control: { type: 'select' },
    },
    year: {
      options: {
        Default: '24',
        'No input': '',
      },
      control: { type: 'select' },
    },
    owner: {
      options: {
        Default: 'PARSELY KIM',
        'No input': '',
      },
      control: { type: 'select' },
    },
    cvc: {
      options: {
        Default: '123',
        'No input': '',
      },
      control: { type: 'select' },
    },
    company: {
      options: ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumber: ['2222', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
    cvc: '123',
  },
};

export const VisaCard: Story = {
  args: {
    cardNumber: ['4444', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};

export const MasterCard: Story = {
  args: {
    cardNumber: ['5555', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};
