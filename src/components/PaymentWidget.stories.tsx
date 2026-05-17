import type { Meta, StoryObj } from "@storybook/react-vite";
import PaymentWidget from "./PaymentWidget";
import styled from "@emotion/styled";
import CardPreview from "./cardPreview/CardPreview";
import TotalInfo from "./cardInfo/TotalInfo";
import PaymentProvider from "../context/PaymentProvider";
import { MemoryRouter } from "react-router-dom";

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
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  position: relative;
  flex-direction: column;
`;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter>
        <PaymentProvider>
          <CardPaymentWidgetWrapper>
            <CardPreview />
            <TotalInfo />
          </CardPaymentWidgetWrapper>
        </PaymentProvider>
      </MemoryRouter>
    );
  },
};
