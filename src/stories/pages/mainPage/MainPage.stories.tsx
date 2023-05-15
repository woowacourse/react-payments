import { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import MainPage from "pages/MainPage";
import { setData } from "utils/setDataInLocalStorage";

const exampleCards = [
  {
    cardCompany: "국민카드",
    number1: "1232",
    number2: "1312",
    number3: "3123",
    number4: "2131",
    month: "12",
    year: "31",
    name: "",
    code: "123",
    password1: "1",
    password2: "2",
    nickname: "🥰",
  },
  {
    cardCompany: "우리카드",
    number1: "8262",
    number2: "7392",
    number3: "6123",
    number4: "2131",
    month: "09",
    year: "26",
    name: "YUMMY",
    code: "456",
    password1: "1",
    password2: "2",
    nickname: "야미",
  },
  {
    cardCompany: "현대카드",
    number1: "1162",
    number2: "7299",
    number3: "6123",
    number4: "2131",
    month: "01",
    year: "25",
    name: "KIM",
    code: "456",
    password1: "1",
    password2: "2",
    nickname: "^__^",
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
} satisfies Meta<typeof MainPage>;

export default meta;

export const NoCards = () => {
  localStorage.clear();

  return <MainPage />;
};

export const WithCards = () => {
  exampleCards.forEach((card) => setData(card, "card"));

  return <MainPage />;
};
