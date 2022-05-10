import AnotherCard from './AnotherCard';

export default {
  title: 'components/AnotherCard',
  component: AnotherCard,
};

const Template = (args) => <AnotherCard {...args} />;

export const Example = Template.bind({});
