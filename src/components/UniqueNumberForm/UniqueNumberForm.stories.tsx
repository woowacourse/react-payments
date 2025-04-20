import type { Meta, StoryObj } from "@storybook/react";
import UniqueNumberForm from "./UniqueNumberForm";

import { useState } from "react";

const meta = {
  title: "MyComponent/UniqueNumberForm",
  component: UniqueNumberForm,
  tags: ["autodocs"],
} satisfies Meta<typeof UniqueNumberForm>;

export default meta;

type Story = StoryObj<typeof UniqueNumberForm>;

export const Primary: Story = {
  args: {
    // placeholder: "1234",
    // maxLength: 4,
    // value: "",
  },
  render: (args: any) => {
    // const [value, setValue] = useState(args.value);

    return <UniqueNumberForm />;
  },
};
