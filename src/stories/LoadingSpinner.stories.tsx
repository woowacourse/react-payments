import type { Meta } from '@storybook/react';
import LoadingSpinner from '../components/LoadingSpinner';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
} as Meta<typeof LoadingSpinner>;

export const Primary = {
  render: () => <LoadingSpinner cardCompany="카드사 선택" />,
};

export const KBCard = {
  render: () => <LoadingSpinner cardCompany="국민카드" />,
};
