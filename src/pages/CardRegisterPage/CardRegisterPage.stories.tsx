import type { Meta } from "@storybook/react";
import CardRegisterPage from "./CardRegisterPage";
import RegisterComfirmPage from "../RegisterComfirmPage/RegisterComfirmPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ROUTE_URL } from "@/constants/url";

const meta = {
  title: "page/CardRegisterPage",
  component: CardRegisterPage,
  decorators: [
    () => (
      <MemoryRouter initialEntries={[{ pathname: ROUTE_URL.HOME }]}>
        <Routes>
          <Route path={ROUTE_URL.HOME} element={<CardRegister />} />
          <Route
            path={ROUTE_URL.REGISTER_CONFIRM}
            element={<RegisterComfirm />}
          />
        </Routes>
      </MemoryRouter>
    ),
  ],
} satisfies Meta<typeof CardRegisterPage>;

export default meta;

export const CardRegister = () => <CardRegisterPage />;
CardRegister.storyName = "CardRegister";

const RegisterComfirm = () => <RegisterComfirmPage />;
RegisterComfirm.storyName = "RegisterComfirm";
