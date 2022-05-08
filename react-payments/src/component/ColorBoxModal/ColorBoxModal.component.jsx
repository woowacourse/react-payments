import CardTypeSelector from "../CardTypeSelector/CardTypeSelector";
import Modal from "../common/Modal/Modal.component";

const ColorBoxModal = (props) => {
  return (
    <Modal>
      <CardTypeSelector {...props} />
    </Modal>
  );
};

export default ColorBoxModal;
