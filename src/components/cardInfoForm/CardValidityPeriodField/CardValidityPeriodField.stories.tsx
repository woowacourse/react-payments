import type { Meta, StoryObj } from '@storybook/react';
import CardValidityPeriodField from './CardValidityPeriodField';
import useCardValidityPeriod from '../../../hooks/useCardValidityPeriod';

const meta = {
  title: 'CardValidityPeriodField',
  component: CardValidityPeriodField,
} satisfies Meta<typeof CardValidityPeriodField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardValidityPeriod: { month: '0', year: '0' },
    errorStateObject: { month: false, year: false },
    handleChangeMonth: () => {},
    handleChangeYear: () => {},
    setCardValidityPeriodInputRef: () => {},
  },
  render: () => {
    const {
      cardValidityPeriod,
      handleChangeMonth,
      handleChangeYear,
      errorMessage: cardValidityPeriodErrorMessage,
      setInputRef,
    } = useCardValidityPeriod({ onComplete: () => {} });

    return (
      <CardValidityPeriodField
        cardValidityPeriod={cardValidityPeriod}
        errorStateObject={{
          month: Boolean(cardValidityPeriodErrorMessage.month),
          year: Boolean(cardValidityPeriodErrorMessage.year),
        }}
        handleChangeMonth={handleChangeMonth}
        handleChangeYear={handleChangeYear}
        setCardValidityPeriodInputRef={setInputRef}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardValidityPeriod: { month: '13', year: '26' },
    errorStateObject: { month: true, year: true },
    handleChangeMonth: () => {},
    handleChangeYear: () => {},
    setCardValidityPeriodInputRef: () => {},
  },
  render: (args) => {
    return <CardValidityPeriodField {...args} />;
  },
};
