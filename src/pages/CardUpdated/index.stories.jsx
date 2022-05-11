import Layout from 'components/Layout';
import CardUpdated from '.';

export default {
  title: 'Page/CardUpdated',
  component: CardUpdated,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Layout>
    <CardUpdated {...args} />
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
