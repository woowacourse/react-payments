import type { Meta, StoryObj } from '@storybook/react';
import CardRegister from '../../pages/CardRegister/CardRegister';
import GlobalStyles from '../../GlobalStyles';

const meta = {
  title: 'pages/CardRegister',
  component: CardRegister,
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
} satisfies Meta<typeof CardRegister>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
