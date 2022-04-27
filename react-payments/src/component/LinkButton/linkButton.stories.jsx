import LinkButton from "./linkButton.component";

export default {
  title: "LinkButton",
  component: LinkButton,
};

const Template = (args) => <LinkButton {...args} />;

export const NextLinkButton = Template.bind({});

NextLinkButton.args = {
  linkLabel: "다음",
  linkClass: "next-link",
};

export const BackLinkButton = Template.bind({});

BackLinkButton.args = {
  linkLabel: "<",
  linkClass: "back-link",
};
