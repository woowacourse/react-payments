import { action } from "@storybook/addon-actions";
import Modal from "./modal.component";
import CardTypeSelector from "../../CardTypeSelector/CardTypeSelector";
import CardControlButtonBox from "../../CardControlButtonBox/CardControlButtonBox.component";
export default {
  title: "Modal",
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
