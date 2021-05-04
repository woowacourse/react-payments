import React, { useState } from "react";
import Modal from "../Modal";
import VirtualKeyboardInput from "../VirtualKeyboardInput";
import VirtualKeyboard from "./index";

export default {
  title: "Components/VirtualKeyboard",
  component: VirtualKeyboard,
  argTypes: {},
};

const Template = (args) => {
  const [inputValue, setInputValue] = useState("");

  const insertInputChar = (value) => {
    if (inputValue.length === 5) {
      console.log("다 채워짐");
      return;
    }

    setInputValue((prevValue) => prevValue + value);
  };

  const deleteInputChar = () => {
    setInputValue((prevValue) => prevValue.replace(/\d$/, ""));
  };

  return (
    <>
      <VirtualKeyboardInput valueByState={inputValue} isCenter="true" />
      <Modal isVisible="true">
        <VirtualKeyboard
          {...args}
          insertInputChar={insertInputChar}
          deleteInputChar={deleteInputChar}
        />
      </Modal>
    </>
  );
};

export const Basic = Template.bind({});

Basic.args = {};
