import ToolTip from '.';

export default {
  title: 'Component/@Common/ToolTip',
  component: ToolTip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    align: {
      options: ['top', 'bottom', 'left', 'right'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => (
  <ToolTip {...args}>
    <button type="button">마우스를 올려보세요!</button>
  </ToolTip>
);

const Default = Template.bind({});
Default.args = {
  text: '마우스를 올릴 시 툴팁이 출력됩니다.',
};

export { Default };
