import React from "react";
import type { Meta } from "@storybook/react";
import CardCompanyInput from "../../component/AddCardPage/CardDetailForm/CardCompanyInput/CardCompanyInput";

const meta = {
  component: CardCompanyInput,
  title: "Input",
} satisfies Meta<typeof CardCompanyInput>;

export default meta;

export const CardCompany = () => <CardCompanyInput />;
