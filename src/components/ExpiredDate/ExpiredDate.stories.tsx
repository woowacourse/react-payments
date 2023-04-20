import { Meta } from '@storybook/react';
import ExpiredDate from './ExpiredDate';
import React, { useState } from 'react';

const meta = {
  component: ExpiredDate,
  title: 'Section/ExpiredDate',
} satisfies Meta<typeof ExpiredDate>;

export default meta;

export const CardExpiredDateStory = () => {
  const [expiredDate, setExpiredDate] = useState<Record<number, string>>({
    0: '',
    1: '',
  });

  return (
    <ExpiredDate expiredDate={expiredDate} setExpiredDate={setExpiredDate} />
  );
};
