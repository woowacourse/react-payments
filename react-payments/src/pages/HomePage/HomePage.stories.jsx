import HomePage from "./HomePage.pages";
import { CardDataContext } from "../../provider/CardDataProvider";
import { withReactContext } from "storybook-react-context";
import { action } from "@storybook/addon-actions";

export default {
  title: "HomePage",
  component: HomePage,
};

const Template = (args) => <HomePage {...args} />;

export const DefaultHomePage = Template.bind({});
DefaultHomePage.args = {};

export const ExistCardHomePage = Template.bind({});
ExistCardHomePage.decorators = [
  withReactContext({
    Context: CardDataContext,
    initialState: {
      cardData: {
        1: {
          cardNumber: {
            first: "1234",
            second: "2345",
            third: "6273",
            fourth: "8283",
          },
          userName: "스밍",
          month: "11",
          year: "22",
          cardTypeInfo: {
            cardName: "포코 카드",
            cardType: "pocoCard",
          },
          cardName: "스밍카드",
        },
        2: {
          cardNumber: {
            first: "1234",
            second: "2345",
            third: "6273",
            fourth: "8283",
          },
          userName: "우연",
          month: "11",
          year: "22",
          cardTypeInfo: {
            cardName: "공원 카드",
            cardType: "gongwonCard",
          },
          cardName: "우연 카드",
        },
      },
      dispatch: action("dispatch"),
    },
  }),
];
