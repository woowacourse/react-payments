import { Meta } from '@storybook/react';
import { RefObject, useRef } from 'react';
import ExpiredDate, { ExpiredDateProps } from './ExpiredDate';

const meta = {
  component: ExpiredDate,
  title: 'Section/ExpiredDate',
  tags: ['autodocs'],
  argTypes: {
    checkExpiredDate: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof ExpiredDate>;

export default meta;

const Template = (
  args: ExpiredDateProps & { nextRef: RefObject<HTMLInputElement> }
) => {
  const ref = useRef<HTMLInputElement>(null);
  return <ExpiredDate {...args} ref={ref} />;
};
Template.args = { expiredDate: {} };

export const ExpiredDateFilled = Template.bind({});
export const ExpiredDateEmpty = Template.bind({});

ExpiredDateFilled.args = {
  expiredDate: {
    0: '02',
    1: '32',
  },
};

ExpiredDateEmpty.args = {
  expiredDate: {
    0: '',
    1: '',
  },
};
