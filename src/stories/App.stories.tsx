import type { Meta, StoryObj } from '@storybook/react';
import App from '../App';
import { reactRouterParameters, withRouter } from 'storybook-addon-remix-react-router';

const meta = {
  title: 'App',
  component: App,
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
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
