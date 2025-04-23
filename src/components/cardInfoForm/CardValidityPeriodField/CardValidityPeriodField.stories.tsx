import type { Meta, StoryObj } from '@storybook/react';
import CardValidityPeriodField from './CardValidityPeriodField';
import React, { useState } from 'react';

const meta = {
  title: 'CardValidityPeriodField',
  component: CardValidityPeriodField,
} satisfies Meta<typeof CardValidityPeriodField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardValidityPeriod: { month: '0', year: '0' },
    isError: { month: false, year: false },
    onChange: () => {},
  },
  render: (args) => {
    const [cardValidityPeriod, setCardValidityPeriod] = useState({
      month: '1',
      year: '25',
    });
    const [isErrorCardValidityPeriod, setIsErrorCardValidityPeriod] = useState({
      month: false,
      year: false,
    });
    const onChangeCardValidityPeriod = (
      e: React.ChangeEvent<HTMLInputElement>,
      type: 'month' | 'year',
    ) => {
      const { value } = e.target;

      if (type === 'month') {
        if (Number.parseInt(value, 10) > 12 || Number.parseInt(value, 10) < 1) {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            month: true,
          }));
        } else {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            month: false,
          }));
        }
      } else if (type === 'year') {
        if (
          Number.parseInt(value, 10) <
          Number.parseInt(new Date().getFullYear().toString().slice(2), 10)
        ) {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            year: true,
          }));
        } else {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            year: false,
          }));
        }
      }

      setCardValidityPeriod((prev) => ({
        ...prev,
        [type]: value.slice(0, 2),
      }));
    };

    return (
      <CardValidityPeriodField
        {...args}
        cardValidityPeriod={cardValidityPeriod}
        isError={isErrorCardValidityPeriod}
        onChange={onChangeCardValidityPeriod}
      />
    );
  },
};

export const Error: Story = {
  args: {
    cardValidityPeriod: { month: '13', year: '26' },
    isError: { month: false, year: false },
    onChange: () => {},
  },
  render: (args) => {
    const [cardValidityPeriod, setCardValidityPeriod] = useState({
      month: '13',
      year: '26',
    });
    const [isErrorCardValidityPeriod, setIsErrorCardValidityPeriod] = useState({
      month: true,
      year: true,
    });
    const onChangeCardValidityPeriod = (
      e: React.ChangeEvent<HTMLInputElement>,
      type: 'month' | 'year',
    ) => {
      const { value } = e.target;

      if (type === 'month') {
        if (Number.parseInt(value, 10) > 12 || Number.parseInt(value, 10) < 1) {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            month: true,
          }));
        } else {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            month: false,
          }));
        }
      } else if (type === 'year') {
        if (
          Number.parseInt(value, 10) <
          Number.parseInt(new Date().getFullYear().toString().slice(2), 10)
        ) {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            year: true,
          }));
        } else {
          setIsErrorCardValidityPeriod((prev) => ({
            ...prev,
            year: false,
          }));
        }
      }

      setCardValidityPeriod((prev) => ({
        ...prev,
        [type]: value.slice(0, 2),
      }));
    };

    return (
      <CardValidityPeriodField
        {...args}
        cardValidityPeriod={cardValidityPeriod}
        isError={isErrorCardValidityPeriod}
        onChange={onChangeCardValidityPeriod}
      />
    );
  },
};
