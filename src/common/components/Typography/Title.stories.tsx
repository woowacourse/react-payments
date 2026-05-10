import type {Meta, StoryObj} from '@storybook/react-vite';

import Title from './Title';

const meta = {
  title: 'common/components/Typography/Title',
  component: Title,
  tags: ['autodocs'],
  args: {
    children: 'titleTest',
  },
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
