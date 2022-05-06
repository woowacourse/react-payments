import React from "react";

import { within, userEvent } from "@storybook/testing-library";
import CardInfoContext from "../Pages/CardInfoContext";
import { withReactContext } from "storybook-react-context";
import CardAddPage from "./CardAddPage";

const initialCardInfoState = {
  cardNumber: ["", "", "", ""],
  expireDate: ["", ""],
  holderName: "",
  securityCodeLength: 0,
  passwordLength: [0, 0],
};

export default {
  title: "Pages/CardAddPage",
  component: CardAddPage,
  decorators: [
    withReactContext({
      Context: CardInfoContext,
      initialState: { state: initialCardInfoState, setState: () => {} },
    }),
    (Story) => (
      <div
        style={{
          width: "375px",
          height: "700px",
          margin: "auto",
          backgroundColor: "#ffffff",
          padding: "20px 28px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

const inputCardInfo = (cardInfo, canvasElement) => {
  const canvas = within(canvasElement);
  const cardNumberInputs = canvas.getAllByTestId("card-number");
  const expireDateInputs = canvas.getAllByTestId("expire-date");
  const holderNameInput = canvas.getByTestId("holder-name");
  const securityCodeInput = canvas.getByTestId("security-code");
  const passwordInputs = canvas.getAllByTestId("password");

  cardNumberInputs.forEach((cardNumberInput, index) => {
    userEvent.type(cardNumberInput, cardInfo.cardNumber[index]);
  });

  expireDateInputs.forEach((expireDateInput, index) => {
    userEvent.type(expireDateInput, cardInfo.expireDate[index]);
  });

  userEvent.type(holderNameInput, cardInfo.holderName);

  userEvent.type(securityCodeInput, cardInfo.securityCode);

  passwordInputs.forEach((passwordInput, index) => {
    userEvent.type(passwordInput, cardInfo.password[index]);
  });
};

const sampleCardInfo = {
  cardNumber: ["1234", "5678", "1234", "5678"],
  expireDate: ["12", "25"],
  holderName: "Bling",
  securityCode: "098",
  password: ["0", "0"],
};

const invalidCardInfo = {
  cardNumber: ["123a", "567,", "123", "5678"],
  expireDate: ["13", "28"],
  holderName: "블링",
  securityCode: "p98",
  password: ["0", "d"],
};

const Template = (args) => <CardAddPage {...args} />;

export const Default = Template.bind({});

export const Complete = Template.bind({});

Complete.play = ({ canvasElement }) => {
  inputCardInfo(sampleCardInfo, canvasElement);
};

export const Error = Template.bind({});

Error.play = ({ canvasElement }) => {
  inputCardInfo(invalidCardInfo, canvasElement);
};
