import { Meta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import LoadingPage from "pages/LoadingPage";

const meta = {
  component: LoadingPage,
  title: "Pages/LoadingPage",
} satisfies Meta<typeof LoadingPage>;

export default meta;

export const Loading = () => {
  return (
    <BrowserRouter>
      <div id="root">
        <LoadingPage />
      </div>
    </BrowserRouter>
  );
};
