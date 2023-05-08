import { Meta, StoryObj } from '@storybook/react';
import CardLogo from '../components/@common/CardLogo';
import { IMAGE_PATH } from '../types/Image';
import RefProvider from '../contexts/RefProvider';

const meta = {
  component: CardLogo,
  title: 'Item/CardLogo',
  decorators: [
    (Story) => (
      <RefProvider>
        <Story />
      </RefProvider>
    ),
  ],
} satisfies Meta<typeof CardLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BCLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['BC카드'],
    companyName: 'BC카드',
    setCardCompany: () => {
      alert('cardCompany : BC카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const ShinhanLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['신한카드'],
    companyName: '신한카드',
    setCardCompany: () => {
      alert('cardCompany : 신한카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const KakaoLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['카카오뱅크'],
    companyName: '카카오뱅크',
    setCardCompany: () => {
      alert('cardCompany : 카카오뱅크');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const HyundaiLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['현대카드'],
    companyName: '현대카드',
    setCardCompany: () => {
      alert('cardCompany : 현대카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const WooriLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['우리카드'],
    companyName: '우리카드',
    setCardCompany: () => {
      alert('cardCompany : 우리카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const LotteLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['롯데카드'],
    companyName: '롯데카드',
    setCardCompany: () => {
      alert('cardCompany : 롯데카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const HanaLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['하나카드'],
    companyName: '하나카드',
    setCardCompany: () => {
      alert('cardCompany : 하나카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};

export const KBLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['국민카드'],
    companyName: '국민카드',
    setCardCompany: () => {
      alert('cardCompany : 국민카드');
      return;
    },
    setIsModalOpen: () => {
      alert('modal closed');
      return;
    },
  },
};
