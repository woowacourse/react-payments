import React from 'react';
import { AddCompletePage } from '.';

export default {
  title: 'Pages/AddCompletePage',
  component: AddCompletePage,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <AddCompletePage {...args} />;

export const Default = Template.bind({});
