import type { Meta, StoryObj } from '@storybook/react';
import NavigateButton from '../components/common/NavigateButton';
import { BrowserRouter } from 'react-router-dom';

const meta = {
  title: 'NavigateButton',
  component: NavigateButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
} satisfies Meta<typeof NavigateButton>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    path: '/',
    children: '확인',
    width: '300px',
  },
};
