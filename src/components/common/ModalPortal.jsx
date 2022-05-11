import ReactDOM from 'react-dom';

function ModalPortal({ children }) {
  return ReactDOM.createPortal(children, document.querySelector('#modal'));
}

export default ModalPortal;
