import { BrowserRouter } from 'react-router-dom';
import type { Meta, StoryObj } from '@storybook/react';

import RegisterEntryBox from '../components/RegisterEntryBox/RegisterEntryBox';

const RegisterEntryBoxWithBrowserRouter = () => (
  <BrowserRouter>
    <RegisterEntryBox />
  </BrowserRouter>
);

const meta: Meta<typeof RegisterEntryBoxWithBrowserRouter> = {
  title: 'Components/RegisterEntryBox',
  component: RegisterEntryBoxWithBrowserRouter,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RegisterEntryBoxWithBrowserRouter>;

export const Default: Story = {};
