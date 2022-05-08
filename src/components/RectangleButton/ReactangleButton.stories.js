import RectangleButton from 'components/RectangleButton/RectangleButton';

export default {
  title: 'components/RectangleButton',
  component: RectangleButton,
};

const Template = (args) => <RectangleButton {...args} />;

export const 카드수정 = Template.bind({});
카드수정.args = {
  children: '카드 수정',
  colorType: '',
};

export const 카드삭제 = Template.bind({});
카드삭제.args = {
  children: '카드 삭제',
  colorType: 'delete',
};
