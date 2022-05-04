import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CardPasswordInputContainerList from '../components/atoms/card-password/CardPasswordInputContainerList';

export default {
  title: 'Example/CardPasswordInputContainerList',
  component: CardPasswordInputContainerList,
} as ComponentMeta<typeof CardPasswordInputContainerList>;

const Template: ComponentStory<typeof CardPasswordInputContainerList> = (args) => (
  <CardPasswordInputContainerList />
);

export const Primary = Template.bind({});
