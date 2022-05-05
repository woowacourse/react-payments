import CardTypeSelector from "../CardTypeSelector/CardTypeSelector";
import Modal from "../common/Modal/modal.component";

const ColorBoxModal = (props) => {
  return (
    <Modal>
      <CardTypeSelector {...props} />
    </Modal>
  );
};

export default ColorBoxModal;
