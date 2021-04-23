import { QuestionDescription } from '../components/commons/questionDescription/QuestionDescription';

export default {
  title: 'QuestionDescription',
  component: QuestionDescription,
};

const Template = args => <QuestionDescription {...args} />;

export const Default = Template.bind({});
Default.args = {};
