import { Meta } from '@storybook/react';
import ExpiredDate from './ExpiredDate';
import React, { useRef } from 'react';

const meta = {
  component: ExpiredDate,
  title: 'Section/ExpiredDate',
} satisfies Meta<typeof ExpiredDate>;

export default meta;

export const CardExpiredDateStory = () => {
  const cardExpiredDateRefs = {
    0: useRef<HTMLInputElement>(null),
    1: useRef<HTMLInputElement>(null),
  };

  return <ExpiredDate refs={cardExpiredDateRefs} />;
};
