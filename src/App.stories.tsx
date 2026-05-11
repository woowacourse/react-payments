import type { Meta, StoryObj } from "@storybook/react-vite";
import styled from "@emotion/styled";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PaymentProvider from "./context/PaymentProvider";
import Enrollment from "./components/Enrollment";
import App from "./App";
import PaymentWidget from "./components/PaymentWidget";

const meta: Meta<typeof App> = {
  title: "Components/App",
  component: App,
};

export default meta;

type Story = StoryObj<typeof App>;

const AppWrapper = styled.div`
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgb(231, 231, 231);
`;

export const Default: Story = {
  render: () => {
    return (
      <MemoryRouter initialEntries={["/react-payments/"]}>
        <AppWrapper>
          <PaymentProvider>
            <Routes>
              <Route path="/react-payments/" element={<PaymentWidget />} />
              <Route
                path="/react-payments/enrollment"
                element={<Enrollment />}
              />
            </Routes>
          </PaymentProvider>
        </AppWrapper>
      </MemoryRouter>
    );
  },
};
