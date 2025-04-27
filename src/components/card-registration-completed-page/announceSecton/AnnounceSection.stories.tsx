import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardInfoProvider } from '../../main-page/CardInfoContext';
import AnnounceSection from './AnnounceSection';

const meta = {
  title: 'AnnounceSection',
  component: AnnounceSection,
  decorators: [
    (Story) => (
      <Router>
        <CardInfoProvider>
          <Story />
        </CardInfoProvider>
      </Router>
    ),
  ],
} satisfies Meta<typeof AnnounceSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
