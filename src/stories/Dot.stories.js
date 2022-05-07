import React from "react";

import { Dot } from "components/common/Dot";

export default {
  title: "Example/Dot",
  component: Dot,
  decorators: [
    (Story) => (
      <div style={{ width: "150px", border: "1px dotted black" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = () => <Dot />;

export const DotTemplate = Template.bind({});
