import React from 'react';
import { CardInfoForm } from '.';

export default {
  title: 'Pages/AddCardPages/AddFormPage/CardInfoForm',
  component: CardInfoForm,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <CardInfoForm {...args} />;

export const _CardInfoForm = Template.bind({});
