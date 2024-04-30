import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { useState } from 'react';
import CardInformationPreview from '../../components/CardInformationPreview/CardInformationPreview';

const 기본_props = {
  cardNumberState: {
    first: '',
    second: '',
    third: '',
    fourth: '',
  },
  expirationDateState: {
    month: '',
    year: '',
  },
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: false,
  },
  cardBrandState: '',
  cvcNumberState: '',
};

const meta = {
  title: 'CardInformationPreview',
  component: CardInformationPreview,
} satisfies Meta<typeof CardInformationPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const 기본: Story = {
  decorators: [
    (Story) => {
      const [isFront, setIsFront] = useState<boolean>(false);
      return (
        <Story
          args={{ ...기본_props, isFocusCVCPreview: isFront, setIsFocusCVCPreview: setIsFront }}
        />
      );
    },
  ],
  args: {
    cardNumberState: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    expirationDateState: {
      month: '',
      year: '',
    },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: false,
    },
    cardBrandState: '',
    cvcNumberState: '',
    isFocusCVCPreview: false,
    setIsFocusCVCPreview: fn(),
  },
};

const 전체_props = {
  cardNumberState: { first: '5123', second: '1234', third: '1234', fourth: '1234' },
  expirationDateState: { month: '12', year: '24' },
  userNameState: 'SIMO COOKIE',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: true,
  },
  cardBrandState: '롯데카드',
  cvcNumberState: '123',
  isFocusCVCPreview: false,
  setIsFocusCVCPreview: fn(),
};

export const 전체: Story = {
  decorators: [
    (Story) => {
      const [isFront, setIsFront] = useState<boolean>(false);
      return (
        <Story
          args={{ ...전체_props, isFocusCVCPreview: isFront, setIsFocusCVCPreview: setIsFront }}
        />
      );
    },
  ],
  args: {
    cardNumberState: { first: '5123', second: '1234', third: '1234', fourth: '1234' },
    expirationDateState: { month: '12', year: '24' },
    userNameState: 'SIMO COOKIE',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: true,
    },
    cardBrandState: '',
    cvcNumberState: '',
    isFocusCVCPreview: false,
    setIsFocusCVCPreview: fn(),
  },
};

const 비자카드_props = {
  cardNumberState: { first: '4123', second: '', third: '', fourth: '' },
  expirationDateState: { month: '', year: '' },
  userNameState: '',
  showImageCondition: {
    visaShowCondition: true,
    masterCardShowCondition: false,
  },
  cardBrandState: '롯데카드',
  cvcNumberState: '123',
  isFocusCVCPreview: false,
  setIsFocusCVCPreview: fn(),
};

export const 비자카드: Story = {
  decorators: [
    (Story) => {
      const [isFront, setIsFront] = useState<boolean>(false);
      return (
        <Story
          args={{ ...비자카드_props, isFocusCVCPreview: isFront, setIsFocusCVCPreview: setIsFront }}
        />
      );
    },
  ],
  args: {
    cardNumberState: { first: '5123', second: '1234', third: '1234', fourth: '1234' },
    expirationDateState: { month: '12', year: '24' },
    userNameState: 'SIMO COOKIE',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: true,
    },
    cardBrandState: '',
    cvcNumberState: '',
    isFocusCVCPreview: false,
    setIsFocusCVCPreview: fn(),
  },
};

const 마스터카드_props = {
  cardNumberState: { first: '5123', second: '', third: '', fourth: '' },
  expirationDateState: { month: '', year: '' },
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: true,
  },
  cardBrandState: '국민카드',
  cvcNumberState: '123',
  isFocusCVCPreview: false,
  setIsFocusCVCPreview: fn(),
};

export const 마스터카드: Story = {
  decorators: [
    (Story) => {
      const [isFront, setIsFront] = useState<boolean>(false);
      return (
        <Story
          args={{
            ...마스터카드_props,
            isFocusCVCPreview: isFront,
            setIsFocusCVCPreview: setIsFront,
          }}
        />
      );
    },
  ],
  args: {
    cardNumberState: { first: '5123', second: '', third: '', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: true,
    },
    cardBrandState: '국민카드',
    cvcNumberState: '123',
    isFocusCVCPreview: false,
    setIsFocusCVCPreview: fn(),
  },
};

const 일반카드_props = {
  cardNumberState: { first: '1111', second: '', third: '', fourth: '' },
  expirationDateState: { month: '', year: '' },
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: false,
  },
  cardBrandState: '국민카드',
  cvcNumberState: '123',
  isFocusCVCPreview: false,
  setIsFocusCVCPreview: fn(),
};

export const 일반카드: Story = {
  decorators: [
    (Story) => {
      const [isFront, setIsFront] = useState<boolean>(false);
      return (
        <Story
          args={{
            ...일반카드_props,
            isFocusCVCPreview: isFront,
            setIsFocusCVCPreview: setIsFront,
          }}
        />
      );
    },
  ],
  args: {
    cardNumberState: { first: '1111', second: '', third: '', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: false,
    },
    cardBrandState: '국민카드',
    cvcNumberState: '123',
    isFocusCVCPreview: false,
    setIsFocusCVCPreview: fn(),
  },
};

const 카드번호_가리기_props = {
  cardNumberState: { first: '', second: '', third: '1244', fourth: '' },
  expirationDateState: { month: '', year: '' },
  userNameState: '',
  showImageCondition: {
    visaShowCondition: false,
    masterCardShowCondition: false,
  },
  cardBrandState: '국민카드',
  cvcNumberState: '123',
  isFocusCVCPreview: false,
  setIsFocusCVCPreview: fn(),
};

export const 카드번호_가리기: Story = {
  decorators: [
    (Story) => {
      const [isFront, setIsFront] = useState<boolean>(false);
      return (
        <Story
          args={{
            ...카드번호_가리기_props,
            isFocusCVCPreview: isFront,
            setIsFocusCVCPreview: setIsFront,
          }}
        />
      );
    },
  ],
  args: {
    cardNumberState: { first: '', second: '', third: '1234', fourth: '' },
    expirationDateState: { month: '', year: '' },
    userNameState: '',
    showImageCondition: {
      visaShowCondition: false,
      masterCardShowCondition: false,
    },
    cardBrandState: '국민카드',
    cvcNumberState: '123',
    isFocusCVCPreview: false,
    setIsFocusCVCPreview: fn(),
  },
};
