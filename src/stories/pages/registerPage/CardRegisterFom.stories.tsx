import { Meta, StoryObj } from "@storybook/react";
import CardRegisterFormComponent from "../../../pages/RegisterPage/CardRegisterForm";
import { BrowserRouter } from "react-router-dom";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "components/provider/ModalStateProvider";

const meta = {
  component: CardRegisterFormComponent,
  title: "Pages/CardRegisterPage",
  decorators: [
    (Story) => (
      <CardInfoProvider>
        <ModalStateProvider>
          <BrowserRouter>
            <Story />
          </BrowserRouter>
        </ModalStateProvider>
      </CardInfoProvider>
    ),
  ],
} satisfies Meta<typeof CardRegisterFormComponent>;

export default meta;

type Story = StoryObj<typeof CardRegisterFormComponent>;

export const CardRegisterPage: Story = {
  args: {},
};
