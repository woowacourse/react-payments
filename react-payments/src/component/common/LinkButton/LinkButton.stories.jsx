import LinkButton from "component/common/LinkButton/LinkButton.component";

export default {
  title: "Common/LinkButton",
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
