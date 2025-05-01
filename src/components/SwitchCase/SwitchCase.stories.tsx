import type { Meta, StoryObj } from "@storybook/react";
import SwitchCase from "./SwitchCase";

const meta = {
  title: "Component/SwitchCase",
  component: SwitchCase,
  args: {
    value: "1",
    caseBy: {
      "1": () => <div>Case 1</div>,
      "2": () => <div>Case 2</div>,
      "3": () => <div>Case 3</div>,
    },
    defaultComponent: () => <div>Default Case</div>,
  },
} satisfies Meta<typeof SwitchCase>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
