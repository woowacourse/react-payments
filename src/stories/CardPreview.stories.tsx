import type { Meta, StoryObj } from '@storybook/react-vite';
import CardPreview from './../components/CardPreview';

const meta = {
  title: 'Components/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  argTypes: {
    cardBrand: {
      control: { type: 'select' },
      options: ['VISA', 'MasterCard', null],
      description: '카드 브랜드 (VISA | MasterCard | null)',
    },
    cardNumberSegments: {
      control: 'object',
      description: '4자리 숫자 문자열 4개로 이루어진 배열 (예: ["1234", "5678", "9012", "3456"])',
    },
    expiryMonth: {
      control: { type: 'select' },
      options: Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0')),
      description: '1~12 사이의 숫자 문자열',
    },
    expiryYear: {
      control: { type: 'number', min: 24, max: 40, step: 1 },
      description: '2자리 연도 문자열 (예: 26)',
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardBrand: null,
    cardNumberSegments: ['', '', '', ''],
    expiryMonth: '',
    expiryYear: '',
  },
};

export const Visa: Story = {
  args: {
    cardBrand: 'VISA',
    cardNumberSegments: ['4123', '4567', '8901', '2345'],
    expiryMonth: '12',
    expiryYear: '26',
  },
};

export const MasterCard: Story = {
  args: {
    cardBrand: 'MasterCard',
    cardNumberSegments: ['5212', '3456', '7890', '1234'],
    expiryMonth: '08',
    expiryYear: '28',
  },
};

export const UnknownBrand: Story = {
  args: {
    cardBrand: null,
    cardNumberSegments: ['9999', '1234', '5678', '9012'],
    expiryMonth: '03',
    expiryYear: '30',
  },
};

export const PartiallyFilled: Story = {
  args: {
    cardBrand: 'VISA',
    cardNumberSegments: ['4123', '4567', '', ''],
    expiryMonth: '12',
    expiryYear: '26',
  },
};
