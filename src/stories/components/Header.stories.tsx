import { Meta, StoryObj } from "@storybook/react";
import HeaderComponent from "../../components/Header";
import { BrowserRouter } from "react-router-dom";

const meta = {
  component: HeaderComponent,
  title: "Components/Header",
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    navigator: {
      description:
        "true: 왼쪽에 `<` 화살표 모양의 네비게이터 생성<br> false: 왼쪽에 `<` 화살표 모양의 네비게이터 제거",
    },
    title: {
      description: "헤더 텍스트를 수정할 수 있습니다.",
    },
  },
} satisfies Meta<typeof HeaderComponent>;

export default meta;

type Story = StoryObj<typeof HeaderComponent>;

export const CardRegisterHeader: Story = {
  args: {
    navigator: true,
    title: "카드 추가",
  },
};

export const MainHeader: Story = {
  args: {
    navigator: false,
    title: "보유카드",
  },
};
