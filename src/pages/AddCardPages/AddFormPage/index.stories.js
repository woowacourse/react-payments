import React from 'react';
import { AddFormPage } from '.';

export default {
  title: 'Pages/AddFormPage',
  component: AddFormPage,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <AddFormPage {...args} />;

export const Default = Template.bind({});
