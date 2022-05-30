import React, { useState } from "react";
import Calendar from "components/common/Calendar";

export default {
  title: "Common/Calendar",
  component: Calendar,
  argTypes: {
    itemList: { control: "array" },
    dimensions: { control: "object" },
  },
};

const Template = (args) => {
  const [item, setItem] = useState();
  return <Calendar {...args} setItem={setItem} item={item} />;
};
export const Primary = Template.bind({});

Primary.args = {
  itemList: [1, 2, 3, 4],
  dimensions: {
    width: 754,
    height: 200,
  },
};
