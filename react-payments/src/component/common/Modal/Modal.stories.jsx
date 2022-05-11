import { action } from "@storybook/addon-actions";
import Modal from "component/common/Modal/Modal.component";
import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import CardControlButtonBox from "../../CardControlButtonBox/CardControlButtonBox.component";

export default {
  title: "Common/Modal",
  component: Modal,
};

export const CardTypeSelectorModal = (args) => (
  <Modal {...args}>
    <CardTypeSelector currentCardType="pocoCard" />
  </Modal>
);

CardTypeSelectorModal.args = {
  toggleModal: action("toggled"),
};

export const CardControlModal = (args) => (
  <Modal {...args} type="edit">
    <CardControlButtonBox />
  </Modal>
);
