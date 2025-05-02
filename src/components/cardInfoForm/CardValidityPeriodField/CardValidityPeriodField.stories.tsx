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
    onChangeMonth: () => {},
    onChangeYear: () => {},
    setCardValidityPeriodInputRef: () => {},
  },
  render: () => {
    const {
      cardValidityPeriod,
      onChangeMonth,
      onChangeYear,
      errorMessage: cardValidityPeriodErrorMessage,
      setInputRef,
    } = useCardValidityPeriod();

    return (
      <CardValidityPeriodField
        cardValidityPeriod={cardValidityPeriod}
        errorStateObject={{
          month: Boolean(cardValidityPeriodErrorMessage.month),
          year: Boolean(cardValidityPeriodErrorMessage.year),
        }}
        onChangeMonth={onChangeMonth}
        onChangeYear={onChangeYear}
        setCardValidityPeriodInputRef={setInputRef}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardValidityPeriod: { month: '13', year: '26' },
    errorStateObject: { month: true, year: true },
    onChangeMonth: () => {},
    onChangeYear: () => {},
    setCardValidityPeriodInputRef: () => {},
  },
  render: (args) => {
    return <CardValidityPeriodField {...args} />;
  },
};
