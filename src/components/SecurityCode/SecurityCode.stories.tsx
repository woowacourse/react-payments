import { StoryObj, Meta } from '@storybook/react';
import SecurityCode from './SecurityCode';

const meta = {
  component: SecurityCode,
  title: 'Section/SecurityCode',
} satisfies Meta<typeof SecurityCode>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {};
