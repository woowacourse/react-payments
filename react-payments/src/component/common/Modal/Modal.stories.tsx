import { action } from "@storybook/addon-actions";
import Modal, { ModalProps } from "component/common/Modal/Modal.component";
import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import CardControlButtonBox from "../../CardControlButtonBox/CardControlButtonBox.component";

import { Meta, Story } from "@storybook/react";

export default {
  title: "Common/Modal",
  component: Modal,
} as Meta;

export const CardTypeSelectorModal: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <CardTypeSelector />
  </Modal>
);

CardTypeSelectorModal.args = {
  toggleModal: action("toggled"),
};

export const CardControlModal: Story<ModalProps> = (args) => (
  <Modal {...args} styleType="edit">
    <CardControlButtonBox
      handleDeleteCard={async () => {
        action("handleDeleteCard")();
      }}
      handleEditCard={() => {
        action("handleEditCard");
      }}
    />
  </Modal>
);

CardControlModal.args = {
  toggleModal: action("toggled"),
};
