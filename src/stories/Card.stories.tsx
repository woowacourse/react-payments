import type { Meta, StoryObj } from '@storybook/react';

import Card from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Card',
  tags: ['autodocs'],
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const HyundaiCard: Story = {
  args: {
    cardType: '현대카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const HyundaiCard_Back: Story = {
  args: {
    cardType: '현대카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const HyundaiCard_Spin: Story = {
  args: {
    cardType: '현대카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const BCCard: Story = {
  args: {
    cardType: 'BC카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const BCCard_Back: Story = {
  args: {
    cardType: 'BC카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const BCCard_Spin: Story = {
  args: {
    cardType: 'BC카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const ShinhanCard: Story = {
  args: {
    cardType: '신한카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const ShinhanCard_Back: Story = {
  args: {
    cardType: '신한카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const ShinhanCard_Spin: Story = {
  args: {
    cardType: '신한카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const KookminCard: Story = {
  args: {
    cardType: '국민카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const KookminCard_Back: Story = {
  args: {
    cardType: '국민카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const KookminCard_Spin: Story = {
  args: {
    cardType: '국민카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const LotteCard: Story = {
  args: {
    cardType: '롯데카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const LotteCard_Back: Story = {
  args: {
    cardType: '롯데카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const LotteCard_Spin: Story = {
  args: {
    cardType: '롯데카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const WooriCard: Story = {
  args: {
    cardType: '우리카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const WooriCard_Back: Story = {
  args: {
    cardType: '우리카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const WooriCard_Spin: Story = {
  args: {
    cardType: '우리카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const KakaoBank: Story = {
  args: {
    cardType: '카카오뱅크',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const KakaoBank_Back: Story = {
  args: {
    cardType: '카카오뱅크',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const KakaoBank_Spin: Story = {
  args: {
    cardType: '카카오뱅크',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const HanaBank: Story = {
  args: {
    cardType: '하나카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: false,
    expired: '01/01',
  },
};

export const HanaBank_Back: Story = {
  args: {
    cardType: '하나카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    cardFlipped: true,
    expired: '01/01',
  },
};

export const HanaBank_Spin: Story = {
  args: {
    cardType: '하나카드',
    cardNumber: {
      first: '1234',
      second: '1234',
      third: '1234',
      fourth: '1234',
    },
    cardOwner: 'LEE',
    securityCode: '123',
    classname: 'adding-card',
    cardFlipped: false,
    expired: '01/01',
  },
};
