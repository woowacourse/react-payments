import React from 'react';
import { CardNicknameForm } from '.';

export default {
  title: 'Pages/AddCardPages/AddCompletePage/CardNicknameForm',
  component: CardNicknameForm,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <CardNicknameForm {...args} />;

export const _CardNicknameForm = Template.bind({});
