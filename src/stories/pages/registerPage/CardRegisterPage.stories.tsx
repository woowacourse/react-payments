import { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import CardRegisterFormComponent from "pages/RegisterPage/CardRegisterForm";
import CardInfoProvider from "components/provider/CardInfoProvider";
import ModalStateProvider from "components/provider/ModalStateProvider";

const meta = {
  component: CardRegisterFormComponent,
  title: "Pages/CardRegisterPage",
} satisfies Meta<typeof CardRegisterFormComponent>;

export default meta;

export const CardRegisterPage = () => {
  return (
    <CardInfoProvider>
      <ModalStateProvider>
        <BrowserRouter>
          <CardRegisterFormComponent />
        </BrowserRouter>
      </ModalStateProvider>
    </CardInfoProvider>
  );
};
