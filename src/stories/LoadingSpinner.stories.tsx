import type { Meta } from '@storybook/react';

import LoadingSpinner from '../components/LoadingSpinner';
import { APP_WIDTH } from '../utils/constants';

export default {
  title: 'LoadingSpinner',
  component: LoadingSpinner,
  decorators: [
    (Story) => (
      <div
        style={{
          width: APP_WIDTH,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta<typeof LoadingSpinner>;

export const Primary = {
  render: () => <LoadingSpinner cardCompany="카드사 선택" />,
};

export const KBCard = {
  render: () => <LoadingSpinner cardCompany="국민카드" />,
};
