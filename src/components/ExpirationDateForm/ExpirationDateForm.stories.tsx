import type { Meta, StoryObj } from "@storybook/react";
import ExpirationDateForm from "./ExpirationDateForm";

import { useState } from "react";

const meta = {
  title: "MyComponent/ExpirationDateForm",
  component: ExpirationDateForm,
  tags: ["autodocs"],
} satisfies Meta<typeof ExpirationDateForm>;

export default meta;

type Story = StoryObj<typeof ExpirationDateForm>;

export const Primary: Story = {
  args: {
    // placeholder: "1234",
    // maxLength: 4,
    // value: "",
  },
  render: (args: any) => {
    // const [value, setValue] = useState(args.value);

    return <ExpirationDateForm />;
  },
};
