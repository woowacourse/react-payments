import { Footer } from '.';

export default {
  title: 'Component/Footer',
  component: Footer,
  argTypes: {},
};

const Template = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  text: '다음',
};
