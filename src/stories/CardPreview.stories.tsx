import type { Meta, StoryObj } from '@storybook/react-vite';
import CardPreview from '../components/AddCardForm/CardPreview';
import { CARD_ISSUER, CARD_NETWORK } from '../constants';

const meta = {
  title: 'Components/CardPreview',
  component: CardPreview,
  tags: ['autodocs'],
  argTypes: {
    issuer: {
      control: { type: 'select' },
      options: [null, ...Object.keys(CARD_ISSUER)],
      description: '카드사 (배경색에 영향)',
    },
    network: {
      control: { type: 'select' },
      options: [null, ...Object.keys(CARD_NETWORK)],
      description: '카드 네트워크 브랜드',
    },
    numberSegments: {
      control: 'object',
      description: '4자리 숫자 문자열 4개 배열 (예: ["1234", "5678", "9012", "3456"])',
    },
    expiryDate: {
      control: 'object',
      description: '[월(MM), 년(YY)] 배열 (예: ["12", "26"])',
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    issuer: undefined,
    network: undefined,
    numberSegments: ['', '', '', ''],
    expiryDate: ['', ''],
  },
};

export const Visa: Story = {
  args: {
    issuer: 'shinhan',
    network: 'VISA',
    numberSegments: ['4123', '4567', '8901', '2345'],
    expiryDate: ['12', '26'],
  },
};

export const MasterCard: Story = {
  args: {
    issuer: 'bc',
    network: 'MasterCard',
    numberSegments: ['5212', '3456', '7890', '1234'],
    expiryDate: ['08', '28'],
  },
};

export const AMEX: Story = {
  args: {
    issuer: 'hyundai',
    network: 'AMEX',
    numberSegments: ['3714', '4963', '539', ''],
    expiryDate: ['05', '27'],
  },
};

export const UnknownNetwork: Story = {
  args: {
    issuer: 'kakao',
    network: undefined,
    numberSegments: ['9999', '1234', '5678', '9012'],
    expiryDate: ['03', '30'],
  },
};

export const PartiallyFilled: Story = {
  args: {
    issuer: undefined,
    network: 'VISA',
    numberSegments: ['4123', '4567', '', ''],
    expiryDate: ['12', ''],
  },
};
