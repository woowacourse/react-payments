import React from "react";
import { Modal } from "..";
import { MODAL_DATA_KEY, VIRTUAL_KEYBOARD_TARGET_INPUT } from "../../constants";
import { useModalInterface, useModalVirtualKeyboardInput } from "../../hooks";
import VirtualKeyboardInput from "../VirtualKeyboardInput";
import VirtualKeyboardModal from ".";

export default {
  title: "Components/VirtualKeyboardModal",
  component: VirtualKeyboardModal,
  argTypes: {},
};

const Template = (args) => {
  const virtualKeyboardModalInterface = useModalInterface({
    [MODAL_DATA_KEY.TARGET_INPUT]: VIRTUAL_KEYBOARD_TARGET_INPUT.SECURE_CODE,
    [MODAL_DATA_KEY.CHAR_INSERTION]: null,
    [MODAL_DATA_KEY.CHAR_DELETION]: false,
  });
  const virtualKeyboardInput = useModalVirtualKeyboardInput({
    targetInputType: VIRTUAL_KEYBOARD_TARGET_INPUT.SECURE_CODE,
    maxLength: 10,
    modalInterface: virtualKeyboardModalInterface,
  });

  return (
    <>
      <VirtualKeyboardInput
        value={virtualKeyboardInput.value}
        isCenter="true"
      />
      <VirtualKeyboardModal
        isVisible={true}
        dataPassage={virtualKeyboardModalInterface.dataPassage}
      />
    </>
  );
};

export const Basic = Template.bind({});

Basic.args = {};
