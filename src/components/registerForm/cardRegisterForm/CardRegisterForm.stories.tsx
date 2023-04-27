import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import CardRegisterForm from ".";
import { CardInfoProvider } from "src/context/CardInfoContext";
import { ModalProvider } from "src/context/ModalContext";
import { BrowserRouter } from "react-router-dom";

const cardRegister = {
  component: CardRegisterForm,
  title: "CardRegisterForm Input",
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <div>
            <ModalProvider>
              <CardInfoProvider>
                <div style={{ width: "375px", margin: "0 auto" }}>
                  <Story />
                </div>
              </CardInfoProvider>
            </ModalProvider>
            <div id="modal-root"></div>
          </div>
        </BrowserRouter>
      );
    },
  ],
} satisfies Meta<typeof CardRegisterForm>;

export default cardRegister;

type Story = StoryObj<typeof cardRegister>;

export const Example = {
  args: {},
} satisfies Story;
