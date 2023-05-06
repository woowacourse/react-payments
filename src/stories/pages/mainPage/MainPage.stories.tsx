import { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";

const exampleCards = [
  {
    cardCompany: "국민카드",
    code: "123",
    month: "12",
    name: "",
    nickname: "🥰",
    number1: "1232",
    number2: "1312",
    number3: "3123",
    number4: "2131",
    password1: "1",
    password2: "2",
    year: "31",
  },
  {
    cardCompany: "우리카드",
    code: "456",
    month: "09",
    name: "YUMMY",
    nickname: "야미",
    number1: "8262",
    number2: "7392",
    number3: "6123",
    number4: "2131",
    password1: "1",
    password2: "2",
    year: "26",
  },
  {
    cardCompany: "현대카드",
    code: "456",
    month: "01",
    name: "KIM",
    nickname: "^__^",
    number1: "1162",
    number2: "7299",
    number3: "6123",
    number4: "2131",
    password1: "1",
    password2: "2",
    year: "25",
  },
];

const meta = {
  component: MainPage,
  title: "Pages/MainPage",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],

  argTypes: {
    cardList: {
      options: {
        NoCards: [],
        WithCards: exampleCards,
      },
      control: {
        type: "select",
      },
      description: "등록된 카드가 있을 때와 없을 때를 확인할 수 있습니다.",
    },
  },
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof MainPage>;

export const NoCards: Story = {
  args: {
    cardList: [],
  },
};

export const WithCards: Story = {
  args: {
    cardList: exampleCards,
  },
};
