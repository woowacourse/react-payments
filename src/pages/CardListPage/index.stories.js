import React from 'react';
import { CardListPage } from '.';

export default {
  title: 'Pages/CardListPage',
  component: CardListPage,
  decorators: [
    (Story) => (
      <div style={{ width: '375px', height: '701px', backgroundColor: '#fff' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <CardListPage {...args} />;

export const Default = Template.bind({});
