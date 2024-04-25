import type { Meta, StoryObj } from '@storybook/react';

import { CardPreview } from '../components';
import { CardPreviewProps } from '../components/CardPreview';
import { CARD_COMPANY, ETC_CARD_COMPANY } from '../constants';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

const BASIC_CARD_PREVIEW_PROPS: CardPreviewProps = {
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
};
const getCardProps = (key: string) => ({
  ...BASIC_CARD_PREVIEW_PROPS,
  cardInfo: {
    ...BASIC_CARD_PREVIEW_PROPS.cardInfo,
    company: CARD_COMPANY.get(key) || BASIC_CARD_PREVIEW_PROPS.cardInfo.company,
  },
});

export const CardBC: Story = {
  args: {
    ...getCardProps('bc'),
  },
};

export const CardSinhan: Story = {
  args: {
    ...getCardProps('sinhan'),
  },
};
export const CardKakao: Story = {
  args: {
    ...getCardProps('kakao'),
  },
};
export const CardHyundai: Story = {
  args: {
    ...getCardProps('hyundai'),
  },
};
export const CardWori: Story = {
  args: {
    ...getCardProps('wori'),
  },
};
export const CardLotte: Story = {
  args: {
    ...getCardProps('lotte'),
  },
};
export const CardHana: Story = {
  args: {
    ...getCardProps('hana'),
  },
};
export const CardKb: Story = {
  args: {
    ...getCardProps('kb'),
  },
};
export const CardEtc: Story = {
  args: {
    ...getCardProps('etc'),
  },
};
