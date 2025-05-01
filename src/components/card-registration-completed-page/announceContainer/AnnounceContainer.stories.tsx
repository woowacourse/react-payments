import type { Meta, StoryObj } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { CardInfoProvider } from '../../main-page/CardInfoContext';
import AnnounceContainer from './AnnounceContainer';

const meta = {
  title: 'AnnounceContainer',
  component: AnnounceContainer,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        {' '}
        <CardInfoProvider>
          <Story />
        </CardInfoProvider>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof AnnounceContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
