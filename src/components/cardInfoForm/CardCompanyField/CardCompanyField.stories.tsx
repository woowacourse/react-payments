import type { Meta, StoryObj } from '@storybook/react';
import CardCompany from './CardCompanyField';
import useCardCompany from '../../../hooks/useCardCompany';
import CardCompanyField from './CardCompanyField';

const meta = {
  title: 'CardCompany',
  component: CardCompany,
} satisfies Meta<typeof CardCompany>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCard: null,
    CARD_COMPANY_NAMES: [
      'BC카드',
      '신한카드',
      '카카오뱅크',
      '현대카드',
      '우리카드',
      '롯데카드',
      '하나카드',
      '국민카드',
    ],
    CARD_COMPANY_PLACEHOLDER: '카드사를 선택해주세요',
    handleClickCardCompany: () => {},
  },
  render: (args) => {
    const {
      selectedCard,
      CARD_COMPANY_NAMES,
      CARD_COMPANY_PLACEHOLDER,
      handleClickCardCompany,
    } = useCardCompany({ onComplete: () => {} });

    return (
      <CardCompanyField
        {...args}
        selectedCard={selectedCard}
        CARD_COMPANY_NAMES={CARD_COMPANY_NAMES}
        CARD_COMPANY_PLACEHOLDER={CARD_COMPANY_PLACEHOLDER}
        handleClickCardCompany={handleClickCardCompany}
      />
    );
  },
};
