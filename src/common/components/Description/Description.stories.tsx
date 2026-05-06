import type {Meta, StoryObj} from '@storybook/react-vite';

import Description from './Description';

const meta = {
  title: 'common/components/Description',
  component: Description,
  tags: ['autodocs'],
  args: {
    // props
    value: '',
  },
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'descriptionTest',
  },
};
