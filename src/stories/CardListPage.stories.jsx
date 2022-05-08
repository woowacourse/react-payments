import { CardList } from 'pages';

export default {
  title: 'Pages/CardList',
};

const Template = (args) => <CardList {...args} />;

export const Default = Template.bind({});
Default.args = {};
