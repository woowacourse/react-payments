import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExpiredPeriodInputContainer from '../components/atoms/card-expired-period/ExpiredPeriodInputContainer';

export default {
  title: 'Example/ExpiredPeriodInputContainer',
  component: ExpiredPeriodInputContainer,
} as ComponentMeta<typeof ExpiredPeriodInputContainer>;

const Template: ComponentStory<typeof ExpiredPeriodInputContainer> = (args) => <ExpiredPeriodInputContainer />;

export const Primary = Template.bind({});
