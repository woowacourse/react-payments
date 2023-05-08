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

const Template = (
  args: CardNumbersProps & { nextRef: RefObject<HTMLInputElement> }
) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardNumbers {...args} ref={ref} />;
};

Template.args = {
  cardNumbers: {},
};

export const CardNumbersFilled = Template.bind({});
export const CardNumbersEmpty = Template.bind({});

CardNumbersFilled.args = {
  cardNumbers: {
    0: '1111',
    1: '2222',
    2: '3333',
    3: '4444',
  },
};

CardNumbersEmpty.args = {
  cardNumbers: {
    0: '',
    1: '',
    2: '',
    3: '',
  },
};
