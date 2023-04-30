import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const getCardInfo = (bank: string = '') => ({
  id: '1',
  firstCardNumbers: '1234',
  secondCardNumbers: '1234',
  thirdCardNumbers: '1234',
  fourthCardNumbers: '1234',
  expirationMonth: '12',
  expirationYear: '23',
  ownerName: 'Woody',
  securityNumbers: '123',
  firstPassword: '1',
  secondPassword: '2',
  bank,
  nickname: bank.toUpperCase(),
});

export const Default: Story = {
  args: {
    cardInfo: getCardInfo(),
  },
};

export const Bc: Story = {
  args: {
    cardInfo: getCardInfo('bc'),
  },
};

export const Sinhan: Story = {
  args: {
    cardInfo: getCardInfo('sinhan'),
  },
};

export const Kakao: Story = {
  args: {
    cardInfo: getCardInfo('kakao'),
  },
};

export const Hyundai: Story = {
  args: {
    cardInfo: getCardInfo('hyundai'),
  },
};

export const Woori: Story = {
  args: {
    cardInfo: getCardInfo('woori'),
  },
};

export const Lotte: Story = {
  args: {
    cardInfo: getCardInfo('lotte'),
  },
};

export const Hana: Story = {
  args: {
    cardInfo: getCardInfo('hana'),
  },
};

export const Kookmin: Story = {
  args: {
    cardInfo: getCardInfo('kookmin'),
  },
};
