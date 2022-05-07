import Layout from 'components/Layout';
import CardList from '.';

export default {
  title: 'Page/CardList',
  component: CardList,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Layout>
    <CardList {...args} />
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
