import type { Meta, StoryObj } from '@storybook/react';
import CardInputSection from './CardInputSection';
import CardNumberField from '../CardNumberField/CardNumberField';
import CardValidityPeriodField from '../CardValidityPeriodField/CardValidityPeriodField';
import CardCVCField from '../CardCVCField/CardCVCField';
import useCardNumber from '../../../hooks/useCardNumber';
import { STEP } from '../../../constants/step';
import useCardValidityPeriod from '../../../hooks/useCardValidityPeriod';
import useCardCVC from '../../../hooks/useCardCVC';

const meta = {
  title: 'CardInputSection',
  component: CardInputSection,
} satisfies Meta<typeof CardInputSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '결제할 카드 번호 입력',
    description: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: '',
    children: <></>,
    name: 'CardNumber',
  },
  render: (args) => {
    return <CardInputSection {...args}></CardInputSection>;
  },
};

export const CardNumber: Story = {
  args: {
    title: '결제할 카드 번호 입력',
    description: '본인 명의의 카드만 결제 가능합니다.',
    errorMessage: '',
    children: <></>,
    name: 'CardNumber',
  },
  render: (args) => {
    const {
      cardNumber,
      handleChangeCardNumber,
      errorMessage: cardNumberErrorMessage,
      setInputRef,
    } = useCardNumber({ onComplete: () => {} });

    return (
      <CardInputSection
        {...args}
        title="결제할 카드 번호 입력"
        description="본인 명의의 카드만 결제 가능합니다."
        name={STEP.CardNumber}
      >
        <CardNumberField
          cardNumber={cardNumber}
          errorStateList={cardNumberErrorMessage.map((errorMessage) =>
            Boolean(errorMessage),
          )}
          onChange={handleChangeCardNumber}
          setInputRef={setInputRef}
        />
      </CardInputSection>
    );
  },
};

export const CardValidityPeriod: Story = {
  args: {
    title: '카드 유효기간을 입력해 주세요',
    description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    errorMessage: '',
    children: <></>,
    name: 'CardValidityPeriod',
  },
  render: (args) => {
    const {
      cardValidityPeriod,
      handleChangeMonth,
      handleChangeYear,
      errorMessage: cardValidityPeriodErrorMessage,
      setInputRef: setCardValidityPeriodInputRef,
    } = useCardValidityPeriod({ onComplete: () => {} });
    return (
      <CardInputSection
        {...args}
        title="카드 유효기간을 입력해 주세요"
        description="월/년도(MMYY)를 순서대로 입력해 주세요."
        name={STEP.CardValidityPeriod}
      >
        <CardValidityPeriodField
          cardValidityPeriod={cardValidityPeriod}
          errorStateObject={{
            month: Boolean(cardValidityPeriodErrorMessage.month),
            year: Boolean(cardValidityPeriodErrorMessage.year),
          }}
          handleChangeMonth={handleChangeMonth}
          handleChangeYear={handleChangeYear}
          setCardValidityPeriodInputRef={setCardValidityPeriodInputRef}
        />
      </CardInputSection>
    );
  },
};

export const CardCVC: Story = {
  args: {
    title: 'CVC 번호를 입력해 주세요',
    errorMessage: '',
    children: <></>,
    name: 'CardCVC',
  },
  render: (args) => {
    const {
      cardCVC,
      handleChangeCVC,
      errorMessage: cardCVCErrorMessage,
    } = useCardCVC({ onComplete: () => {} });

    return (
      <CardInputSection
        {...args}
        title="CVC 번호를 입력해 주세요"
        errorMessage={cardCVCErrorMessage}
        name={STEP.CardCVC}
      >
        <CardCVCField
          cardCVC={cardCVC}
          hasError={Boolean(cardCVCErrorMessage)}
          onChange={handleChangeCVC}
        />
      </CardInputSection>
    );
  },
};
