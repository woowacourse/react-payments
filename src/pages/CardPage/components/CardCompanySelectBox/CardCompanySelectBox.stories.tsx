import type { Meta, StoryObj } from '@storybook/react';
import CardCompanySelectBox from './CardCompanySelectBox';

const meta: Meta<typeof CardCompanySelectBox> = {
  title: 'Components/CardCompanySelectBox',
  component: CardCompanySelectBox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardCompanySelectBox>;

export const Default: Story = {};
