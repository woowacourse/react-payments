import { Meta } from '@storybook/react';
import CardNumbers, { CardNumbersProps } from './CardNumbers';
import { RefObject, useRef } from 'react';

const meta = {
  component: CardNumbers,
  title: 'Section/CardNumbers',
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

export const CardNumbersStory = (
  args: CardNumbersProps & { nextRef: RefObject<HTMLInputElement> }
) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardNumbers {...args} ref={ref} />;
};

CardNumbersStory.args = {
  cardNumbers: {
    0: '1111',
    1: '2222',
    2: '3333',
    3: '4444',
  },
};
