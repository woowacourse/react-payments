import Input from "../input/Input";
import { Meta, StoryObj } from "@storybook/react";
import NewCardInputSection, { NewCardInputSectionProps } from "./NewCardInputSection";

const meta: Meta<NewCardInputSectionProps> = {
  title: "Components/NewCardInputSection",
  component: NewCardInputSection,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    mainText: "Main Text",
    subText: "Sub Text",
    errorMessage: ["", "", "", ""],
    children: [
      <Input
        key="key"
        maxLength={2}
        placeholder="Enter text..."
      />,
    ],
  },
};

export const CardNumbers: Story = {
  args: {
    label: "카드 번호",
    mainText: "결제할 카드 번호를 입력해 주세요",
    subText: "본인 명의의 카드만 결제 가능합니다.",
    errorMessage: ["Error message 1", "Error message 2", "Error message 3", "Error message 4"],
    children: Array.from({ length: 4 }).map((_, index) => (
      <Input
        key={index}
        maxLength={4}
        placeholder="1234"
      />
    )),
  },
};

export const CardExpiration: Story = {
  args: {
    label: "유효 기간",
    mainText: "카드 유효기간을 입력해 주세요",
    subText: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    errorMessage: ["Error message 1", "Error message 2"],
    children: [
      <Input
        key="month"
        maxLength={2}
        placeholder="MM"
      />,
      <Input
        key="year"
        maxLength={2}
        placeholder="YY"
      />,
    ],
  },
};

export const UserName: Story = {
  args: {
    label: "소유자 이름",
    mainText: "카드 소유자 이름을 입력해 주세요",
    subText: "",
    errorMessage: ["Error message 1"],
    children: [
      <Input
        key="month"
        maxLength={2}
        placeholder="John Doe"
      />,
    ],
  },
};
