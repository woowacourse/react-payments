import type { Meta, StoryObj } from "@storybook/react-vite";

import InputField from "@components/common/InputField";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "타이틀",
    caption: "여기는 캡션입니다!",
    label: "라벨",
    inputPropsList: [{ placeholder: "입력해 주세요" }],
  },
};

export const MultipleInputs: Story = {
  args: {
    title: "타이틀",
    label: "라벨",
    inputPropsList: [{ placeholder: "첫 번째" }, { placeholder: "두 번째" }],
  },
};

export const Error: Story = {
  args: {
    title: "타이틀",
    caption: "여기는 캡션입니다!",
    label: "라벨",
    inputPropsList: [{ state: "error", placeholder: "입력해 주세요" }],
    helperMessage: "에러가 발생했습니다!",
  },
};
