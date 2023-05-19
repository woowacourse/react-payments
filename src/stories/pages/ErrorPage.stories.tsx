import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage from '../../pages/ErrorPage';

const meta: Meta<typeof ErrorPage> = {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '375px' }}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {};
