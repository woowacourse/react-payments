import ReactDOM from 'react-dom';
import { Modal } from './components/common/Modal';

const ModalPortal = ({ children, selected, closeModal }) => {
  const selectedComponent = children.find(
    (component) => component.props.name === selected
  );

  return ReactDOM.createPortal(
    <Modal visible={selected} closeModal={closeModal}>
      {selected && selectedComponent}
    </Modal>,
    document.getElementById('modal')
  );
};

export default ModalPortal;
