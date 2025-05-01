import type { Meta, StoryObj } from '@storybook/react';
import RegisterCardPage from '../../routes/RegisterCardPage';
import { MemoryRouter } from 'react-router-dom';
import { ROUTER_PATH } from '../../constants/setting';

const meta = {
  title: 'Routes/RegisterCardPage',
  component: RegisterCardPage,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={[ROUTER_PATH.MAIN]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof RegisterCardPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
