import { Meta, StoryObj } from '@storybook/react';
import CardComapnyIcons from './CardCompanyIcons';

const meta = {
  component: CardComapnyIcons,
  title: 'Section/CardComapnyIcons',
} satisfies Meta<typeof CardComapnyIcons>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BottomSheetStory: Story = {};
