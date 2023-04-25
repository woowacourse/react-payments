import { ChangeEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import InputBoxOwner from "../component/CardInputPage/InputBoxOwner/InputBoxOwner";

const meta: Meta = {
  title: "InputBoxOwner component",
  component: InputBoxOwner,
};

export default meta;

export const InputTest = (args: any) => (
  <InputBoxOwner
    changeCardOwnerStatus={() => {}}
    changeNowCardInfo={() => {}}
  ></InputBoxOwner>
);
