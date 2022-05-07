import LinkButton from "./linkButton.component";

export default {
  title: "LinkButton",
  component: LinkButton,
};

export const NextLinkButton = (args) => <LinkButton {...args}>다음</LinkButton>;

NextLinkButton.args = {
  type: "submit",
};

export const BackLinkButton = (args) => (
  <LinkButton {...args}>{"<"}</LinkButton>
);

BackLinkButton.args = {};
