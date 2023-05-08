import { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CardRegisterFormComponent from "pages/RegisterPage/CardRegisterForm";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "woowahan-yummy-modal/dist/ModalStateProvider";

const meta = {
  component: CardRegisterFormComponent,
  title: "Pages/CardRegisterPage",
} satisfies Meta<typeof CardRegisterFormComponent>;

export default meta;

export const CardRegisterPage = () => {
  return (
    <BrowserRouter>
      <CardInfoProvider>
        <ModalStateProvider initialState>
          <CardRegisterFormComponent />
        </ModalStateProvider>
      </CardInfoProvider>
    </BrowserRouter>
  );
};
