import { StoryFn } from '@storybook/react';
import { ExpirationDateInput, ExpirationProps } from './ExpirationDateInput';

export default {
  title: 'ExpirationDateInput',
  component: ExpirationDateInput,
};

const Template: StoryFn<ExpirationProps> = (args) => <ExpirationDateInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
