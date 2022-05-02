import Layout from 'components/Layout';
import CardAdd from '.';

export default {
  title: 'Page/CardAdd',
  component: CardAdd,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Layout>
    <CardAdd {...args} />
  </Layout>
);

export const CardAddPage = Template.bind({});
CardAddPage.args = {};
