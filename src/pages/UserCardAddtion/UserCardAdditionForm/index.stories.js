import React from 'react';
import { UserCardAdditionForm } from '.';

export default {
  title: 'Pages/UserCardAdditionForm',
  component: UserCardAdditionForm,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <UserCardAdditionForm {...args} />;

export const Default = Template.bind({});
