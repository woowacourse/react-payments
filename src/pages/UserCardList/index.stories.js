import React from 'react';
import { UserCardList } from '.';

export default {
  title: 'Pages/UserCardList',
  component: UserCardList,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <UserCardList {...args} />;

export const Default = Template.bind({});
