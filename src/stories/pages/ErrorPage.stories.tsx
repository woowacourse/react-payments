import type { Meta, StoryObj } from '@storybook/react';
import GlobalStyles from '../../GlobalStyles';
import ErrorPage from '../../pages/ErrorPage';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'pages/ErrorPage',
  component: ErrorPage,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </>
    ),
  ],
} satisfies Meta<typeof ErrorPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
