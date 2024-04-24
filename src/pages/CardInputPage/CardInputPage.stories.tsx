import { Meta, StoryObj } from "@storybook/react";
import CardInputPage from "./CardInputPage";

const meta: Meta = {
  title: "CardInputPage",
  component: CardInputPage,
};

export default meta;

type CardInputPageProps = {};

export const DefaultCardInputPage: StoryObj<CardInputPageProps> = () => (
  <CardInputPage />
);

DefaultCardInputPage.args = {};
