import Palette from '.';

export default {
  title: 'Palette',
  component: Palette,
  argTypes: {
    onClickCardSelector: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Palette {...args} />;

export const Example = Template.bind({});

const onClickCardSelector = (type) => () => {
  console.log(type);
};

Example.args = {
  onClickCardSelector,
};
