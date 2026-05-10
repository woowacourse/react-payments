import type { Meta, StoryObj } from '@storybook/react-vite';
import CompletePage from './CompletePage';

const meta: Meta<typeof CompletePage> = {
  title: 'Components/CompletePage',
  component: CompletePage,
};

export default meta;

type Story = StoryObj<typeof CompletePage>;

export const Default: Story = {
  args: {
    cardNumberFirstSegment: '5511',
    cardBrand: 'BC',
  },
};
