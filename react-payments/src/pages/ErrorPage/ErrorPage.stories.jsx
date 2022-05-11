import ErrorPage from "./ErrorPage.pages";

export default {
  title: "Pages/ErrorPage",
  component: ErrorPage,
};

const Template = (args) => <ErrorPage {...args} />;

export const DefaultErrorPage = Template.bind({});
DefaultErrorPage.args = {};
