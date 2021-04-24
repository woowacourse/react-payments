import React from 'react';
import { CardCompanySelectModal } from '.';

export default {
  title: 'Pages/AddCardPages/AddFormPage/CardCompanySelectModal',
  component: CardCompanySelectModal,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <CardCompanySelectModal {...args} />;

export const _CardCompanySelectModal = Template.bind({});
