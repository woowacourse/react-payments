import type { Meta, StoryObj } from "@storybook/react-vite";

import InputField from "../components/InputField";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "라벨",
    title: "타이틀",
    caption: "여기는 캡션입니다!",
    inputPropsList: [{}],
  },
};

export const Error: Story = {
  args: {
    label: "라벨",
    title: "타이틀",
    caption: "여기는 캡션입니다!",
    inputPropsList: [{ state: "error" }],
    helperMessage: "에러가 발생했습니다!",
  },
};
