import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  argTypes: {
    cardNumbers: {
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
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Default: Story = {
  args: {
    cardNumbers: ['2222', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};

export const VisaCard: Story = {
  args: {
    cardNumbers: ['4444', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: ['5555', '3333', '4444', '5555'],
    month: '12',
    year: '24',
    owner: 'PARSELY KIM',
  },
};
