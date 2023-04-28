import type { Meta, Story } from '@storybook/react';
import Header from '../components/common/Header';
import { LeftArrowIcon } from '../assets/icons';

const meta = {
  title: 'Payment/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Header>;

interface HeaderProps {
  title: string;
  leading?: React.ReactElement;
}

const Template: Story<HeaderProps> = (args) => {
  return <Header {...args} />;
};

export const ListHeader = Template.bind({});
ListHeader.args = {
  title: '보유카드',
};

export const RegistrationHeader = Template.bind({});
RegistrationHeader.args = {
  title: '카드추가',
  leading: <LeftArrowIcon />,
};

export default meta;
