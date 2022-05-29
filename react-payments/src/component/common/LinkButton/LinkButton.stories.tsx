import LinkButton from "component/common/LinkButton/LinkButton.component";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/LinkButton",
  component: LinkButton,
} as Meta;

export const NextLinkButton: Story = (args) => (
  <LinkButton {...args}>다음</LinkButton>
);

NextLinkButton.args = {
  type: "submit",
};

export const BackLinkButton: Story = (args) => (
  <LinkButton {...args}>{"<"}</LinkButton>
);

BackLinkButton.args = {};
