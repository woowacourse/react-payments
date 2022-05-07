import React from 'react';
import CardBasicInfoForm from './CardBasicInfoForm';

export default {
  component: CardBasicInfoForm,
  title: 'CardBasicInfoForm',
};

const Template = args => <CardBasicInfoForm {...args} />;

export const defaultCardBasicInfoForm = Template.bind({});

defaultCardBasicInfoForm.args = {};
