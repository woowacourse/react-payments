import type { Meta, StoryObj } from "@storybook/react";
import CvcNumberForm from "./CvcNumberForm";

import { useState } from "react";

const meta = {
  title: "MyComponent/CvcNumberForm",
  component: CvcNumberForm,
  tags: ["autodocs"],
} satisfies Meta<typeof CvcNumberForm>;

export default meta;

type Story = StoryObj<typeof CvcNumberForm>;

export const Primary: Story = {
  args: {
    // placeholder: "1234",
    // maxLength: 4,
    // value: "",
  },
  render: (args: any) => {
    // const [value, setValue] = useState(args.value);

    return <CvcNumberForm />;
  },
};
