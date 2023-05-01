import { Story, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import BankItem from '../components/BottomSheetComponents/BankItem';

export default {
  title: 'Payment/common/BankItem',
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
} as Meta;

interface BankItemProps {
  bankName: string;
  onClose: () => void;
}

const Template: Story<BankItemProps> = (args) => <BankItem {...args} />;

export const BCCard = Template.bind({});
BCCard.args = {
  bankName: 'BC카드',
  onClose: action('onClose'),
};

export const ShinhanCard = Template.bind({});
ShinhanCard.args = {
  bankName: '신한카드',
  onClose: action('onClose'),
};

export const KakaoCard = Template.bind({});
KakaoCard.args = {
  bankName: '카카오뱅크',
  onClose: action('onClose'),
};

export const HyundaiCard = Template.bind({});
HyundaiCard.args = {
  bankName: '현대카드',
  onClose: action('onClose'),
};

export const WooriCard = Template.bind({});
WooriCard.args = {
  bankName: '우리카드',
  onClose: action('onClose'),
};

export const LotteCard = Template.bind({});
LotteCard.args = {
  bankName: '롯데카드',
  onClose: action('onClose'),
};

export const HanaCard = Template.bind({});
HanaCard.args = {
  bankName: '하나카드',
  onClose: action('onClose'),
};

export const KBCard = Template.bind({});
KBCard.args = {
  bankName: '국민카드',
  onClose: action('onClose'),
};
