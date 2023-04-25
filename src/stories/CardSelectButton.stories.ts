import type { Meta, StoryObj } from '@storybook/react';
import CardSelectButton from '../components/CardSelectButtonPack/CardSelectButton/CardSelectButton';
import testLogo from '../images/icon_bc_card.png';

const meta = {
  component: CardSelectButton,
  title: 'CardSelectButton',
} satisfies Meta<typeof CardSelectButton>;

type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: { title: 'BC카드', src: testLogo },
};

export default meta;
