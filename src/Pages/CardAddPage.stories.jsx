import React from "react";

import { within, userEvent } from "@storybook/testing-library";
import CardInfoContext from "../context/CardInfoContext";
import { withReactContext } from "storybook-react-context";
import CardAddPage from "./CardAddPage";

const PageSharedStyle = {
  width: "375px",
  height: "750px",
  margin: "auto",
  backgroundColor: "#ffffff",
  padding: "20px 28px",
};

export default {
  title: "Pages/CardAddPage",
  component: CardAddPage,
  decorators: [
    withReactContext({
      Context: CardInfoContext,
      initialState: { state: {}, setState: () => {} },
    }),
    (Story) => (
      <div style={PageSharedStyle}>
        <Story />
      </div>
    ),
  ],
};

const testIds = {
  cardNumber: ["card-number", "array"],
  expireDate: ["expire-date", "array"],
  holderName: ["holder-name", "string"],
  securityCode: ["security-code", "string"],
  password: ["password", "array"],
};

const inputCardInfo = (cardInfo, canvas) => {
  Object.entries(testIds).forEach(([key, [name, type]]) => {
    if (type === "array") {
      const inputs = canvas.getAllByTestId(name);
      inputs.forEach((input, index) => {
        userEvent.type(input, cardInfo[key][index]);
      });
    } else {
      const input = canvas.getByTestId(name);
      userEvent.type(input, cardInfo[key]);
    }
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
  const canvas = within(canvasElement);
  inputCardInfo(sampleCardInfo, canvas);
};

export const Error = Template.bind({});

Error.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  inputCardInfo(invalidCardInfo, canvas);
};

export const Submitted = Template.bind({});

Submitted.play = ({ canvasElement }) => {
  const canvas = within(canvasElement);
  inputCardInfo(sampleCardInfo, canvas);
  userEvent.click(canvas.getByTestId("next-button"));
};
