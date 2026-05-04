import type { Meta, StoryObj } from "@storybook/react-vite";
import PaymentWidget from "./PaymentWidget";
import { useState } from "react";
import CardPreview from "./cardPreview/CardPreview";
import CardInfo from "./cardInfo/CardInfo";
import styled from "@emotion/styled";

const meta: Meta<typeof PaymentWidget> = {
  title: "Components/PaymentWidget",
  component: PaymentWidget,
};

export default meta;

type Story = StoryObj<typeof PaymentWidget>;

const CardPaymentWidgetWrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
`;

export const Default: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
    const [expireDate, setExpireDate] = useState({ month: "", year: "" });
    const [cvcNumber, setCvcNumber] = useState([""]);

    return (
      <CardPaymentWidgetWrapper>
        <CardPreview cardNumber={cardNumber} expireDate={expireDate} />
        <CardInfo
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expireDate={expireDate}
          setExpireDate={setExpireDate}
          cvcNumber={cvcNumber}
          setCvcNumber={setCvcNumber}
        />
      </CardPaymentWidgetWrapper>
    );
  },
};

export const Visa: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState([
      "4123",
      "1234",
      "1234",
      "1234",
    ]);
    const [expireDate, setExpireDate] = useState({ month: "12", year: "12" });
    const [cvcNumber, setCvcNumber] = useState(["123"]);

    return (
      <CardPaymentWidgetWrapper>
        <CardPreview cardNumber={cardNumber} expireDate={expireDate} />
        <CardInfo
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expireDate={expireDate}
          setExpireDate={setExpireDate}
          cvcNumber={cvcNumber}
          setCvcNumber={setCvcNumber}
        />
      </CardPaymentWidgetWrapper>
    );
  },
};

export const Master: Story = {
  render: () => {
    const [cardNumber, setCardNumber] = useState([
      "5223",
      "1234",
      "1234",
      "1234",
    ]);
    const [expireDate, setExpireDate] = useState({ month: "12", year: "12" });
    const [cvcNumber, setCvcNumber] = useState(["123"]);

    return (
      <CardPaymentWidgetWrapper>
        <CardPreview cardNumber={cardNumber} expireDate={expireDate} />
        <CardInfo
          cardNumber={cardNumber}
          setCardNumber={setCardNumber}
          expireDate={expireDate}
          setExpireDate={setExpireDate}
          cvcNumber={cvcNumber}
          setCvcNumber={setCvcNumber}
        />
      </CardPaymentWidgetWrapper>
    );
  },
};
