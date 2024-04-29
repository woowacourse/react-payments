import { Meta, StoryObj } from '@storybook/react';
import CardPreview from './CardPreview';

const meta = {
  title: 'CardPreview',
  component: CardPreview,

  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const Visa: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['4234', '1234', '1234', '1234'],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const Master: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['5134', '1234', '1234', '1234'],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const EnterFirstPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '', '', ''],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const EnterSecondPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['', '1234', '', ''],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const EnterThirdPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['', '', '1234', ''],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const EnterFourthPartOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['', '', '', '1234'],
      expirationDate: ['05', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const EnterMonthOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['05', ''],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const EnterYearOnly: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const CVCNumber: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: false,
  },
};

export const BCCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: 'BC카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const ShinhanCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '신한카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const KakaoBank: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '카카오뱅크',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const HyundaiCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '현대카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const WooriCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '우리카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const LotteCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '롯데카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const HanaCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '하나카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};

export const KookminCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ['1234', '1234', '1234', '1234'],
      expirationDate: ['', '25'],
      cardOwnerName: 'CHULMIN PARK',
      cardCompany: '국민카드',
      cardCVCNumber: '123',
      cardPassword: '12',
    },
    isCardFront: true,
  },
};
