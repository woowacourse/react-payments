import ErrorPage from "./ErrorPage.pages";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Pages/ErrorPage",
  component: ErrorPage,
} as Meta;

const Template: Story = (args) => <ErrorPage {...args} />;

export const DefaultErrorPage = Template.bind({});
DefaultErrorPage.args = {};
