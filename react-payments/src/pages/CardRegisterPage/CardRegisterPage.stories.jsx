import { action } from "@storybook/addon-actions";
import { withReactContext } from "storybook-react-context";

import CardRegisterPage from "pages/CardRegisterPage/CardRegisterPage.pages";

import { CardNumberContext } from "provider/CardNumberProvider";
import { CardPasswordContext } from "provider/CardPasswordProvider";
import { ExpireDateContext } from "provider/ExpireDateProvider";
import { SecurityCodeContext } from "provider/SecurityCodeProvider";
import { UserNameContext } from "provider/UserNameProvider";
import { CardTypeContext } from "provider/CardTypeProvider";
import {
  mockCardNumber,
  mockCardPassword,
  mockCardTypeInfo,
  mockExpireDate,
  mockSecurityCode,
  mockUserName,
} from "mock/cardInput";

export default {
  title: "Pages/CardRegisterPage",
  component: CardRegisterPage,
  decorators: [
    withReactContext({
      Context: CardNumberContext,
      initialState: {
        ...mockCardNumber,
        action: {
          resetCardNumber: action("reset-cardNumber"),
        },
      },
    }),
    withReactContext({
      Context: ExpireDateContext,
      initialState: {
        ...mockExpireDate,
        action: {
          resetExpireDate: action("reset-expireDate"),
        },
      },
    }),
    withReactContext({
      Context: UserNameContext,
      initialState: {
        ...mockUserName,
        action: {
          resetUserName: action("reset-userName"),
        },
      },
    }),
    withReactContext({
      Context: SecurityCodeContext,
      initialState: {
        ...mockSecurityCode,
        action: {
          resetSecurityCode: action("reset-securityCode"),
        },
      },
    }),
    withReactContext({
      Context: CardPasswordContext,
      initialState: {
        ...mockCardPassword,
        action: {
          resetCardPassword: action("reset-cardPassword"),
        },
      },
    }),
    withReactContext({
      Context: CardTypeContext,
      initialState: {
        ...mockCardTypeInfo,
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
