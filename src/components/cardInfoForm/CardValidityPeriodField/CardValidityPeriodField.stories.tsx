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
    cardValidityPeriod: { month: '12', year: '25' },
    isError: { month: false, year: false },
    onChange: () => {},
  },
  render: () => {
    const {
      cardValidityPeriod,
      isErrorCardValidityPeriod,
      onChangeCardValidityPeriod,
    } = useCardValidityPeriod();

    return (
      <CardValidityPeriodField
        cardValidityPeriod={cardValidityPeriod}
        isError={isErrorCardValidityPeriod}
        onChange={onChangeCardValidityPeriod}
      />
    );
  },
};

export const Pass: Story = {
  args: {
    cardValidityPeriod: { month: '12', year: '25' },
    isError: { month: false, year: false },
    onChange: () => {},
  },
  render: (args) => {
    return <CardValidityPeriodField {...args} />;
  },
};

export const Error: Story = {
  args: {
    cardValidityPeriod: { month: '13', year: '26' },
    isError: { month: true, year: true },
    onChange: () => {},
  },
  render: (args) => {
    return <CardValidityPeriodField {...args} />;
  },
};
