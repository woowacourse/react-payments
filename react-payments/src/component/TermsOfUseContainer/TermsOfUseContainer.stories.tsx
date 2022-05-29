import TermsOfUseContainer from "./TermsOfUseContainer";

import { Meta, Story } from "@storybook/react";
import { Dispatch, SetStateAction } from "react";
import { action } from "@storybook/addon-actions";

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

const Template: Story<{ setChecked: Dispatch<SetStateAction<boolean>> }> = (
  args
) => <TermsOfUseContainer {...args} />;

export const DefaultTermsOfUseContainer = Template.bind({});
DefaultTermsOfUseContainer.args = {
  setChecked: action("setChecked"),
};
