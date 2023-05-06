import { Meta, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { BottomSheet } from './BottomSheet';

const meta = {
  tags: ['autodocs'],
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
    children: (
      <>
        <div style={{ textAlign: 'center' }}>안녕하세요, BottomSheet입니다.</div>
        <div style={{ textAlign: 'center' }}>안녕하세요, BottomSheet입니다.</div>
        <div style={{ textAlign: 'center' }}>해당 영역에 컴포넌트를 넣어주면 됩니다.</div>
        <div style={{ textAlign: 'center' }}>안녕하세요, BottomSheet입니다.</div>
        <div style={{ textAlign: 'center' }}>안녕하세요, BottomSheet입니다.</div>
      </>
    ),
    active: true,
  },
};
