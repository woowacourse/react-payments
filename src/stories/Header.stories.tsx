import type { Meta, StoryObj } from '@storybook/react';
import Header from '../components/common/Header/Header';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

type HeaderProps = {
  title: string;
  hasBackButton?: boolean;
};

const Template = ({ title, hasBackButton }: HeaderProps) => (
  <MemoryRouter>
    <Header title={title} hasBackButton={hasBackButton} />
  </MemoryRouter>
);

export const Standard = Template.bind({});
Standard.args = {
  title: '뒤로가기 버튼이 있는 헤더',
  hasBackButton: true,
};

export const NoBackButton = Template.bind({});
NoBackButton.args = {
  title: '뒤로가기 버튼이 없는 헤더',
  hasBackButton: false,
};

export default meta;
