import type { Meta, StoryObj } from '@storybook/react';
import {
  reactRouterParameters,
  withRouter,
} from 'storybook-addon-remix-react-router';

import { CardEnrollmentPage } from '../pages';

const meta = {
  title: 'Page',
  component: CardEnrollmentPage,
  decorators: [withRouter],
} satisfies Meta<typeof CardEnrollmentPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardEnrollmentPageDefault: Story = {
  args: {},
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        path: '/card/enrollment',
      },
    }),
  },
};
