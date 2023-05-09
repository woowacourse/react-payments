import Header from './Header';

import { Meta, StoryFn } from '@storybook/react';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Header',
  component: Header,
} satisfies Meta<React.ComponentProps<typeof Header>>;

const Template: StoryFn<React.ComponentProps<typeof Header>> = (props) => <Header {...props} />;

export const Controls = Template.bind({});
Controls.args = {
  title: '헤더 타이틀',
  onClickBack: () => {},
};

export const InListPage = () => {
  return <Header title="보유카드" />;
};

export const InRegisterPage = () => {
  return <Header title="카드 추가" onClickBack={() => {}} />;
};
