import { Meta } from '@storybook/react';
import { RefObject, useRef } from 'react';
import ExpiredDate, { ExpiredDateProps } from './ExpiredDate';

const meta = {
  component: ExpiredDate,
  title: 'Section/ExpiredDate',
  argTypes: {
    checkExpiredDate: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ExpiredDate>;

export default meta;

export const ExpiredDateStory = (
  args: ExpiredDateProps & { nextRef: RefObject<HTMLInputElement> }
) => {
  const ref = useRef<HTMLInputElement>(null);
  return <ExpiredDate {...args} ref={ref} />;
};

ExpiredDateStory.args = {
  expiredDate: {
    0: '02',
    1: '32',
  },
};
