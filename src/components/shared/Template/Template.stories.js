import Template from '.';

export default {
  component: Template,
  title: 'Shared/Template',
};

const TemplateStorybook = args => <Template {...args} />;

export const HasPreviousPage = TemplateStorybook.bind({});

HasPreviousPage.args = {
  title: '카드추가',
  hasPreviousPage: true,
};

export const NoPreviousPage = TemplateStorybook.bind({});
NoPreviousPage.args = {
  title: '카드조회',
  hasPreviousPage: false,
};
