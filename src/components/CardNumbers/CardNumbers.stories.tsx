import { Meta } from '@storybook/react';
import CardNumbers, { CardNumbersProps } from './CardNumbers';
import { RefObject, useRef } from 'react';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
  tags: ['autodocs'],
  argTypes: {
    checkCardNumbers: {
      table: {
        disable: true,
      },
    },
    nextRef: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CardNumbers>;
export default meta;

export const CardNumbersFilled = (
  args: CardNumbersProps & { nextRef: RefObject<HTMLInputElement> }
) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardNumbers {...args} ref={ref} />;
};

CardNumbersFilled.args = {
  cardNumbers: {
    0: '1111',
    1: '2222',
    2: '3333',
    3: '4444',
  },
};

export const CardNumbersEmpty = (
  args: CardNumbersProps & { nextRef: RefObject<HTMLInputElement> }
) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardNumbers {...args} ref={ref} />;
};

CardNumbersEmpty.args = {
  cardNumbers: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
};
