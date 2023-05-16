import { Meta, StoryObj } from '@storybook/react';
import Loading from './Loading';

const meta = {
  component: Loading,
  title: 'Loading',
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const loading_page = {
  args: {},
} satisfies Story;
