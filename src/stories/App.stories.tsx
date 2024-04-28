import type { Meta, StoryObj } from '@storybook/react';
import RegisterCardInfoPage from '@/pages/register/RegisterCardInfoPage';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'RegisterCardInfoPage',
  component: RegisterCardInfoPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      location: {
        state: {},
      },
      routing: {
        path: '/confirm',
        handle: 'App',
      },
    }),
  },
} satisfies Meta<typeof RegisterCardInfoPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
