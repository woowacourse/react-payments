import React from 'react';
import { UserCardAdditionComplete } from '.';

export default {
  title: 'Pages/UserCardAdditionComplete',
  component: UserCardAdditionComplete,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <UserCardAdditionComplete {...args} />;

export const Default = Template.bind({});
