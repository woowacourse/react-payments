import type { Meta, StoryObj } from '@storybook/react';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';

const meta = {
  title: 'CardInformationPreview',
  component: CardInformationPreview,
} satisfies Meta<typeof CardInformationPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  args: {
    cardNumberState: { first: '', second: '', third: '', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: false,
    },
  },
};

export const 전체: Story = {
  args: {
    cardNumberState: { first: '5123', second: '1234', third: '1234', fourth: '1234' },
    expirationDateState: { month: '12', year: '24' },
    userNameState: 'SIMO COOKIE',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: true,
    },
  },
};

export const 비자카드: Story = {
  args: {
    cardNumberState: { first: '4123', second: '', third: '', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: true,
      masterCardShowCondition: false,
    },
  },
};

export const 마스터카드: Story = {
  args: {
    cardNumberState: { first: '5123', second: '', third: '', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: true,
    },
  },
};

export const 일반카드: Story = {
  args: {
    cardNumberState: { first: '1111', second: '', third: '', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: false,
    },
  },
};

export const 카드번호_가리기: Story = {
  args: {
    cardNumberState: { first: '', second: '', third: '1231', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: false,
    },
  },
};
