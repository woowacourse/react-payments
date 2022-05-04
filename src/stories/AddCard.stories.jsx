import React from 'react';
import AddCard from '../components/AddCard';
import '../css/index.css';
import '../css/App.css';

export default {
  title: 'AddCard',
  component: AddCard,
};

const Template = () => <AddCard />;

export const AddCardPage = Template.bind({});

AddCardPage.args = {};
