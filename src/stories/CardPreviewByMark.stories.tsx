import type { Meta, StoryObj } from '@storybook/react';

import { CardPreview } from '../components';
import { CARD_COMPANY, ETC_CARD_COMPANY } from '../constants';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Visa: Story = {
  args: {
    cardInfo: {
      numbers: ['4123', '2013', '1111', '4567'],
      mark: 'visa',
      period: { month: '04', year: '24' },
      userName: 'BADA',
      company: CARD_COMPANY.get('etc') || ETC_CARD_COMPANY,
      cvc: '123',
      password: '11',
    },
    side: 'front',
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      numbers: ['5123', '4577', '8799', '5555'],
      mark: 'master',
      period: { month: '04', year: '24' },
      userName: 'BINGBONG',
      company: CARD_COMPANY.get('etc') || ETC_CARD_COMPANY,
      cvc: '123',
      password: '11',
    },
    side: 'front',
  },
};

export const Etc: Story = {
  args: {
    cardInfo: {
      numbers: ['2013', '1306', '7009', '2025'],
      mark: 'etc',
      period: { month: '06', year: '13' },
      userName: 'JOON',
      company: CARD_COMPANY.get('etc') || ETC_CARD_COMPANY,
      cvc: '123',
      password: '11',
    },
    side: 'front',
  },
};

export const CardBack: Story = {
  args: {
    cardInfo: {
      numbers: ['2013', '1306', '7009', '2025'],
      mark: 'etc',
      period: { month: '06', year: '13' },
      userName: 'JOON',
      company: CARD_COMPANY.get('etc') || ETC_CARD_COMPANY,
      cvc: '123',
      password: '11',
    },
    side: 'back',
  },
};
