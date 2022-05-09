import { CardList } from 'pages';

export default {
  title: 'Pages/CardList',
};

function Template(args) {
  return <CardList {...args} />;
}

export const Default = Template.bind({});
Default.args = {};
