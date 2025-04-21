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

export const Cvc: Story = {
  args: {
    cvcNumberState: ["123"],
    dispatch: () => {},
  },
  render: (args: any) => {
    const [value, setValue] = useState(args.cvcNumberState);

    return <CvcNumberForm cvcNumberState={value} dispatch={setValue} />;
  },
};
