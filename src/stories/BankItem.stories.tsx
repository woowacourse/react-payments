import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BankItem from '../components/BottomSheetComponents/BankItem';

const meta = {
  title: 'Payment/BottomSheetComponents/BankItem',
  component: BankItem,
  tags: ['autodocs'],
  argTypes: {
    bankName: {
      control: {
        type: 'text',
      },
    },
    onClose: {
      action: 'closed',
    },
  },
} satisfies Meta<typeof BankItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BCCard: Story = {
  args: {
    bankName: 'BC카드',
    onClose: action('onClose'),
  },
};

export const ShinhanCard: Story = {
  args: {
    bankName: '신한카드',
    onClose: action('onClose'),
  },
};

export const KakaoCard: Story = {
  args: {
    bankName: '카카오뱅크',
    onClose: action('onClose'),
  },
};

export const HyundaiCard: Story = {
  args: {
    bankName: '현대카드',
    onClose: action('onClose'),
  },
};

export const WooriCard: Story = {
  args: {
    bankName: '우리카드',
    onClose: action('onClose'),
  },
};

export const LotteCard: Story = {
  args: {
    bankName: '롯데카드',
    onClose: action('onClose'),
  },
};

export const HanaCard: Story = {
  args: {
    bankName: '하나카드',
    onClose: action('onClose'),
  },
};

export const KBCard: Story = {
  args: {
    bankName: '국민카드',
    onClose: action('onClose'),
  },
};
