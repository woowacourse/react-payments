import Layout from 'components/Layout';
import CardEditor from '.';

export default {
  title: 'Page/CardEditor',
  component: CardEditor,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <Layout>
    <CardEditor {...args} />
  </Layout>
);

export const Default = Template.bind({});
Default.args = {};
