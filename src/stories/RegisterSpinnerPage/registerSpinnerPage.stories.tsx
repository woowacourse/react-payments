import type { Meta } from "@storybook/react";

import RegisterSpinnerPage from "../../component/RegisterSpinnerPage/RegisterSpinnerPage";

const meta: Meta = {
  title: "RegisterSpinnerPage component",
  component: RegisterSpinnerPage,
};

export default meta;

export const pageTest = (args: any) => (
  <RegisterSpinnerPage></RegisterSpinnerPage>
);
