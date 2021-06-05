import React from 'react';
import Header from '.';
import { Icon } from '..';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: <h1>보유 카드</h1>,
};

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: (
    <>
      <button>
        <Icon.LeftArrow size="16px" color="#525252" />
      </button>
      <h1>보유 카드</h1>
    </>
  ),
};
