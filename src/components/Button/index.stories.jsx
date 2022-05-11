import Button from '.';

export default {
  title: 'Button',
  component: Button,

  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    children: {
      description: '버튼에 들어갈 설명',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: '다음',
};
