import { Meta, StoryObj } from "@storybook/react";
import App from "./App";

const meta: Meta = {
  title: "App",
  component: App,
};

export default meta;

type AppProps = {};

export const DefaultApp: StoryObj<AppProps> = () => <App />;

DefaultApp.args = {};
