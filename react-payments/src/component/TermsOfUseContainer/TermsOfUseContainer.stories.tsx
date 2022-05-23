import TermsOfUseContainer from "./TermsOfUseContainer";

import { Meta, Story } from "@storybook/react";

export default {
  title: "TermsOfUseContainer",
  component: TermsOfUseContainer,
  decorators: [
    (Story) => (
      <div style={{ width: "375px" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story = (args) => <TermsOfUseContainer {...args} />;

export const DefaultTermsOfUseContainer = Template.bind({});
DefaultTermsOfUseContainer.args = {};
