import CardAdd from '.';

export default {
  title: 'Page/CardAdd',
  component: CardAdd,
  parameters: {
    layout: 'centered',
  },
};

const Template = (args) => (
  <div className="App">
    <CardAdd {...args} />
  </div>
);

export const CardAddPage = Template.bind({});
CardAddPage.args = {};
