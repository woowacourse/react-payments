import React from 'react';
import { AddFormPage } from '.';

export default {
  title: 'Pages/AddCardPages/AddFormPage',
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

export const _AddFormPage = Template.bind({});
