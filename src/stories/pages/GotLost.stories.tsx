import { Meta } from "@storybook/react";
import GotLostPage from "pages/GotLost";
import { BrowserRouter } from "react-router-dom";

const meta = {
  component: GotLostPage,
  title: "Pages/GotLost",
} satisfies Meta<typeof GotLostPage>;

export default meta;

export const GotLost = () => {
  return (
    <BrowserRouter>
      <GotLostPage />
    </BrowserRouter>
  );
};
