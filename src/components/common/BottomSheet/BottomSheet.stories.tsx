import { Meta, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { BottomSheet } from './BottomSheet';

const meta = {
  title: 'BottomSheet',
  component: BottomSheet,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof BottomSheet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div>안녕하세요, BottomSheet입니다.</div>,
    active: true,
  },
};
