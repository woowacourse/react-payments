import { Meta } from '@storybook/react';
import { useRef } from 'react';
import CardPassword, { CardPasswordProps } from './CardPassword';

const meta = {
  component: CardPassword,
  title: 'Section/CardPassword',
  argTypes: {
    checkPassword: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof CardPassword>;

export default meta;

export const CardPasswordStory = (args: CardPasswordProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return <CardPassword {...args} ref={ref} />;
};

CardPasswordStory.args = {
  password: {
    0: '0',
    1: '2',
  },
};
