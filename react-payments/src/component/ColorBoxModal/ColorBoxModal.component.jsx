import CardTypeSelector from "component/CardTypeSelector/CardTypeSelector.component";
import Modal from "component/common/Modal/modal.component";

const ColorBoxModal = (props) => {
  return (
    <Modal>
      <CardTypeSelector {...props} />
    </Modal>
  );
};

export default ColorBoxModal;
