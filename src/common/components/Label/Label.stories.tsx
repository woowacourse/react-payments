import type {Meta, StoryObj} from '@storybook/react-vite';

import Label from './Label';

const meta = {
  title: 'common/components/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    // props
    value: '',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'LabelTest',
  },
};
