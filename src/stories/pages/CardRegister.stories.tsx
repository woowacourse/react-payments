import type { Meta, StoryObj } from '@storybook/react';
import CardRegistration from '../../pages/CardRegistration/CardRegistration';
import GlobalStyles from '../../GlobalStyles';

const meta = {
  title: 'pages/CardRegistration',
  component: CardRegistration,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
} satisfies Meta<typeof CardRegistration>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
