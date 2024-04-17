import type { Meta, StoryObj } from "@storybook/react";
import FormField from "../Components/FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  argTypes: {
    title: { control: "object", description: "타이틀" },
    description: { control: "object", description: "설명" },
    label: { control: "object", description: "라벨" },
    inputPlaceholderList: { control: "object", description: "입력 힌트" },
  },
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "신용 카드 UI 기본값",
  args: { title: "text", label: "hi", inputPlaceholderList: ["MM", "YY"] },
};

/**
 * input 1개 일때, 2개 일 때, 4개 일 때.
 * 타이틀이 엄청 길어지면 ... 하기.
 * 설명 두 줄 까지 이후로 ... 하기.
 * 라벨 한 줄 ... 하죠
 */

export const SmallInputForm: Story = {
  name: "preset이 small인 경우",
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    label: "카드 번호",
    inputPlaceholderList: Array(4).fill("1234"),
  },
};

export const MediumInputForm: Story = {
  name: "preset이 medium인 경우",
  args: {
    title: "카드 유효기간을 입력해 주세요",
    description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    label: "유효기간",
    inputPlaceholderList: ["MM", "YY"],
  },
};

export const LargeInputForm: Story = {
  name: "preset이 large인 경우",
  args: { title: "카드 소유자 이름을 입력해 주세요", label: "소유자 이름", inputPlaceholderList: ["River"] },
};
