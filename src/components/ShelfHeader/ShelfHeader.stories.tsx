import { Meta, StoryObj } from '@storybook/react';
import ShelfHeader from './ShelfHeader';

const meta: Meta = {
  title: 'ShelfHeader',
  component: ShelfHeader,
};

export default meta;

type ShelfHeaderProps = {
  title: string;
  description: string;
};

export const DefaultShelfHeader: StoryObj<ShelfHeaderProps> = () => (
  <ShelfHeader title='제목' description='설명입니다.' />
);
DefaultShelfHeader.args = {};

export const NoDescriptionShelfHeader: StoryObj<ShelfHeaderProps> = () => <ShelfHeader title='설명이 없습니다.' />;
NoDescriptionShelfHeader.args = {};
