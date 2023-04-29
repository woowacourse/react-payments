import { Meta, StoryObj } from '@storybook/react';
import CardLogo from './CardLogo';
import { IMAGE_PATH } from '../../types/Image';

const meta = {
  component: CardLogo,
  title: 'Section/CardLogo',
} satisfies Meta<typeof CardLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardLogoStory: Story = {
  args: {
    companyImage: IMAGE_PATH['현대카드'],
    companyName: '현대카드',
  },
};
