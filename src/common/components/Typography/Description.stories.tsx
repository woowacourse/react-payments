import type {Meta, StoryObj} from '@storybook/react-vite';

import Description from './Description';

const meta = {
  title: 'common/components/Typography/Description',
  component: Description,
  tags: ['autodocs'],
  args: {
    children: 'descriptionTest',
  },
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
