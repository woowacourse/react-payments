import Input from "../../default/input/Input";
import Dropdown from "../../default/dropdown/Dropdown";
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

export const Password: Story = {
  args: {
    mainText: "비밀번호를 입력해 주세요",
    subText: "앞의 2자리를 입력해주세요",
    label: "카드 번호",
    errorMessage: ["Error message 1"],
    children: [
      <Input
        key="password"
        type="password"
        maxLength={2}
        placeholder=""
      />,
    ],
  },
};

export const CVC: Story = {
  args: {
    mainText: "CVC 번호를 입력해 주세요",
    subText: "",
    label: "CVC",
    errorMessage: ["Error message 1"],
    children: [
      <Input
        key="cvc"
        maxLength={3}
        placeholder="숫자 3자리"
      />,
    ],
  },
};

export const UserName: Story = {
  args: {
    mainText: "카드 소유자 이름을 입력해 주세요",
    subText: "",
    label: "소유자 이름",
    errorMessage: ["Error message 1"],
    children: [
      <Input
        key="userName"
        maxLength={2}
        placeholder="John Doe"
      />,
    ],
  },
};

export const CardExpiration: Story = {
  args: {
    mainText: "카드 유효기간을 입력해 주세요",
    subText: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    label: "유효 기간",
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

export const CardCompany: Story = {
  args: {
    mainText: "카드사를 선택해 주세요",
    subText: "현재 국내 카드사만 가능합니다.",
    label: "",
    errorMessage: [""],
    children: [
      <Dropdown
        selectList={["BC카드", "신한카드", "카카오뱅크", "현대카드", "우리카드", "롯데카드", "하나카드", "국민카드"]}
        onChange={(selectedValue) => console.log(`카드사: ${selectedValue}`)}
      />,
    ],
  },
};

export const CardNumbers: Story = {
  args: {
    mainText: "결제할 카드 번호를 입력해 주세요",
    subText: "본인 명의의 카드만 결제 가능합니다.",
    label: "카드 번호",
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
