import CardRegisterPage from "./CardRegisterPage.pages";
import { withReactContext } from "storybook-react-context";
import { CardNumberContext } from "../../provider/CardNumberProvider";
import { CardPasswordContext } from "../../provider/CardPasswordProvider";
import { ExpireDateContext } from "../../provider/ExpireDateProvider";
import { SecurityCodeContext } from "../../provider/SecurityCodeProvider";
import { UserNameContext } from "../../provider/UserNameProvider";
import { CardTypeContext } from "../../provider/CardTypeProvider";
import { action } from "@storybook/addon-actions";

export default {
  title: "CardRegisterPage",
  component: CardRegisterPage,
  decorators: [
    withReactContext({
      Context: CardNumberContext,
      initialState: {
        state: {
          cardNumber: {
            first: "1234",
            second: "2345",
            third: "6273",
            fourth: "8283",
          },
        },
        action: {
          resetCardNumber: action("reset-cardNumber"),
        },
      },
    }),
    withReactContext({
      Context: ExpireDateContext,
      initialState: {
        state: {
          expireDate: {
            month: "11",
            year: "22",
          },
        },
        action: {
          resetExpireDate: action("reset-expireDate"),
        },
      },
    }),
    withReactContext({
      Context: UserNameContext,
      initialState: {
        state: {
          userName: "스밍",
        },
        action: {
          resetUserName: action("reset-userName"),
        },
      },
    }),
    withReactContext({
      Context: SecurityCodeContext,
      initialState: {
        state: {
          securityCode: "123",
        },
        action: {
          resetSecurityCode: action("reset-securityCode"),
        },
      },
    }),
    withReactContext({
      Context: CardPasswordContext,
      initialState: {
        state: {
          cardPassword: {
            first: "1",
            second: "2",
          },
        },
        action: {
          resetCardPassword: action("reset-cardPassword"),
        },
      },
    }),
    withReactContext({
      Context: CardTypeContext,
      initialState: {
        state: {
          cardTypeInfo: {
            cardName: "포코 카드",
            cardType: "pocoCard",
          },
        },
        action: {
          resetCardTypeInfo: action("reset-cardTypeInfo"),
        },
      },
    }),
  ],
};

const Template = (args) => <CardRegisterPage {...args} />;

export const DefaultCardRegisterPage = Template.bind({});
DefaultCardRegisterPage.args = {};
