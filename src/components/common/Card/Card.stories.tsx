import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};

export default meta;
type Story = StoryObj<typeof Card>;

export const EmptyCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: 'NAME',
    month: 'MM',
    year: 'YY',
  },
};

export const OnlyEightCard: Story = {
  args: {
    cardNumberSet: ['1234', '1234', '', ''],
    owner: 'NAME',
    month: 'MM',
    year: 'YY',
  },
};

export const OnlyOwnerCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '김아무개씨 Victory',
    month: 'MM',
    year: 'YY',
  },
};

export const OnlyMonthCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: 'NAME',
    month: '12',
    year: 'YY',
  },
};

export const nameLengthThirtyCard: Story = {
  args: {
    cardNumberSet: ['', '', '', ''],
    owner: '가나다라마바사아자차가나다라마바사아자차가나다라마바사아자차',
    month: '12',
    year: 'YY',
  },
};

export const FilledCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '12',
    year: '28',
  },
};

export const PrevCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '03',
    year: '23',
  },
};

export const TitleCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'kakao',
    title: '카카오뱅크 내 카드',
  },
};

export const KakaoCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'kakao',
  },
};

export const HyundaiCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'hyundai',
  },
};

export const HanaCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'hana',
  },
};

export const BcCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'bc',
  },
};

export const KbCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'kb',
  },
};

export const ShinhanCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'shinhan',
  },
};

export const WooriCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'woori',
  },
};

export const LotteCard: Story = {
  args: {
    cardNumberSet: ['1111', '2222', '····', '····'],
    owner: 'EYK',
    month: '04',
    year: '23',
    companyKind: 'lotte',
  },
};
