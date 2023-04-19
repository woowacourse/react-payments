import { storiesOf, StoryFn } from '@storybook/react';
import useState from 'storybook-addon-state';
import { CardNumberInputs, ValueAndOnChange } from './CardNumberInputs';

export default {
  title: 'CardNumberInputs',
  component: CardNumberInputs,
};

const Template: StoryFn<{}> = (args: {}) => <CardNumberInputs valueAndOnChanges={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {};
