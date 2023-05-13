import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../components/CardNicknameInputModal';

const meta: Meta<typeof Modal> = {
  title: 'CardNicknameInputModal',
  tags: ['autodocs'],
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Card_Nickname_Modal: Story = {
  args: {
    cardType: '현대카드',
    isRequesting: false,
    isFailed: false,
    cardNumber: {
      value: { first: '1234', second: '1234', third: '1234', fourth: '1234' },
      onChange: () => {},
    },
    cardOwner: { value: 'LEE', onChange: () => {} },
    securityCode: { value: '123', onChange: () => {} },
    cardExpire: { value: '01/01', onChange: () => {} },
    closeModal: () => {},
    handleNickname: () => {},
    submitData: (e: React.FormEvent) => {
      e.preventDefault();
    },
  },
};
