import type { Meta, StoryObj } from '@storybook/react-vite';
import CardPreview from './../components/CardPreview';

const meta = {
  title: 'Components/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  argTypes: {
    cardnumber: {
      control: 'text',
      description: '16자리 숫자 문자열',
    },
    expiredMonth: {
      control: { type: 'select' },
      options: Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')),
      description: '1~12 사이의 숫자 문자열',
    },
    expiredYear: {
      control: { type: 'number', min: 24, max: 40, step: 1 },
      description: '2자리 연도 문자열 (예: 26)',
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardnumber: '',
    expiredMonth: '',
    expiredYear: '',
  },
};

export const Visa: Story = {
  args: {
    cardnumber: '4123456789012345',
    expiredMonth: '12',
    expiredYear: '26',
  },
};

export const MasterCard: Story = {
  args: {
    cardnumber: '5212345678901234',
    expiredMonth: '08',
    expiredYear: '28',
  },
};

export const UnknownBrand: Story = {
  args: {
    cardnumber: '9999123456789012',
    expiredMonth: '03',
    expiredYear: '30',
  },
};

export const PartiallyFilled: Story = {
  args: {
    cardnumber: '41234567',
    expiredMonth: '12',
    expiredYear: '26',
  },
};
