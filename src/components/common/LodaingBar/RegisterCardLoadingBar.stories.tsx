import { Meta, StoryObj } from '@storybook/react';
import { theme } from 'components/style/theme';
import { ThemeProvider } from 'styled-components';
import { RegisterCardLoadingBar } from './RegisterCardLoadingBar';

const meta = {
  tags: ['autodocs'],
  title: 'RegisterCardLoadingBar',
  component: RegisterCardLoadingBar,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof RegisterCardLoadingBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
