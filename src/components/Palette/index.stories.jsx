import Palette from '.';

export default {
  title: 'Palette',
  component: Palette,
  argTypes: {
    closeModal: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <Palette {...args} />;

const closeModal = () => {};

export const Example = Template.bind({});

Example.args = {
  closeModal,
};
