import type { Meta, StoryObj } from '@storybook/react';
import CardPreview from '../components/CardPreview/CardPreview';
import GlobalStyles from '../GlobalStyles';
import MasterCard from '../assets/images/mastercard.png';
import VisaCard from '../assets/images/visa.png';
import { CARD_COMPANY_COLOR } from '../constants/cardSection';

const meta = {
  title: 'CardPreview',
  component: CardPreview,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
  argTypes: {
    cardNumbers: {
      control: 'object',
      description: '카드 번호 입력 값',
    },
    month: {
      control: 'text',
      description: '카드 월 입력 값',
    },
    year: {
      control: 'text',
      description: '카드 연도 입력 값',
    },
    name: {
      control: 'text',
      description: '카드 소유자 입력 값',
    },
    cardImageSrc: {
      control: [MasterCard, VisaCard],
      description: '카드 브랜드 이미지',
    },
  },
} satisfies Meta<typeof CardPreview>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Front: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '00',
    year: '00',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: '',
  },
};

export const Back: Story = {
  args: {
    isFlip: true,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: '',
  },
};

export const Visa: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['4000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    cvc: '000',
    name: 'JOHN DOE',
    cardImageSrc: VisaCard,
    cardColor: '',
  },
};

export const Master: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['5100', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: MasterCard,
    cardColor: '',
  },
};

export const BC카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.BC카드,
  },
};

export const 신한카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.신한카드,
  },
};

export const 카카오뱅크: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.카카오뱅크,
  },
};

export const 현대카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.현대카드,
  },
};

export const 우리카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.우리카드,
  },
};

export const 롯데카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.롯데카드,
  },
};

export const 하나카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.하나카드,
  },
};

export const 국민카드: Story = {
  args: {
    isFlip: false,
    cardNumbers: ['0000', '0000', '0000', '0000'],
    month: '01',
    year: '01',
    name: 'JOHN DOE',
    cvc: '000',
    cardImageSrc: '',
    cardColor: CARD_COMPANY_COLOR.국민카드,
  },
};
