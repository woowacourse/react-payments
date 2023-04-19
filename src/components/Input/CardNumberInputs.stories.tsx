import { StoryFn } from '@storybook/react';
import { CardNumberInputs } from './CardNumberInputs';

export default {
  title: 'CardNumberInputs',
  component: CardNumberInputs,
};

const Template: StoryFn<{}> = (args: {}) => <CardNumberInputs valueAndOnChanges={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {};
